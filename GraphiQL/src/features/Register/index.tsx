import { useState } from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { registerWithEmailAndPassword, signInWithGoogle } from '../authentication/firebase';
import { useForm } from 'react-hook-form';
import classes from './style.module.scss';
import Button from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input/Input';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTranslation } from 'react-i18next';

type RegisterFormData = {
  name: string;
  email: string;
  password: string;
};

function Register() {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    // reset,
  } = useForm<RegisterFormData>();
  const [error, setErrorFirebase] = useState('');
  const [loading, setLoading] = useState(false);
  // const [valid, setValid] = useState(false);
  // check if userData is valid
  // const [user] = useAuthState(auth);

  const navigate = useNavigate();
  console.log(loading);
  /*useEffect(() => {
    if (user) navigate('/dashboard');
  }, [user, navigate]);
  */
  const onSubmit = async (data: RegisterFormData) => {
    // Validate Fuctions
    const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const validatePassword = (password: string) =>
      /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if (!validateEmail(data.email)) {
      setError('email', { message: 'Please enter a valid email address' });
      return;
    }

    if (!validatePassword(data.password)) {
      setError('password', {
        message:
          'Please enter a strong password with at least 8 characters, one letter, one digit, and one special character',
      });
      toast.error('Please enter a valid password');
      return;
    }

    try {
      setErrorFirebase('');
      setLoading(true);
      toast.success('Successful!');
      await registerWithEmailAndPassword(data.name, data.email, data.password);
    } catch {
      setErrorFirebase('Failed to Register');
      toast.error('Failed to Register');
    }
    // setValid(true);
    setLoading(false);
  };

  return (
    <div className={classes.register}>
      <div className={classes.register__container}>
        <form className={classes.register__form} onSubmit={handleSubmit(onSubmit)}>
          <Input
            placeholder={t('forms.common.name')}
            register={register('name', { required: true })}
          />
          <div className="error">{errors.name && <div>{errors.name.message}</div>}</div>
          <Input
            placeholder={t('forms.common.email')}
            register={register('email', { required: true })}
          />
          <div className="error">{errors.email && <div>{errors.email.message}</div>}</div>
          <Input
            type="password"
            placeholder={t('forms.common.password')}
            register={register('password', { required: true })}
          />
          <div className="error">{errors.password && <div>{errors.password.message}</div>}</div>
          <div className="error">{error && <div>{error}</div>}</div>
          <Button
            style="black"
            disabled={loading}
            type="submit"
            onClick={() => {
              toast.info('Check your Data!');
            }}
          >
            {t('forms.register.button')}
          </Button>
          <Button
            style="blue"
            onClick={() => {
              signInWithGoogle();
              toast.success('Successful!');
              navigate('/main');
            }}
            type="submit"
          >
            {t('forms.register.buttonGoogle')}
          </Button>
        </form>
        <div>
          {t('forms.register.notes.note1')} <Link to="/auth">{t('forms.register.notes.link')}</Link>{' '}
          {t('forms.register.notes.note2')}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
export default Register;
