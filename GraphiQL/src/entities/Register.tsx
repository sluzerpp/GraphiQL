import { useState } from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { registerWithEmailAndPassword, signInWithGoogle } from './firebase';
import { useForm } from 'react-hook-form';
import './Register.css';

type RegisterFormData = {
  name: string;
  email: string;
  password: string;
};

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    // reset,
  } = useForm<RegisterFormData>();
  const [error, setErrorFirebase] = useState('');
  const [loading, setLoading] = useState(false);
  // const [user] = useAuthState(auth);

  const navigate = useNavigate();

  /*useEffect(() => {
    if (user) navigate('/dashboard');
  }, [user, navigate]);
  */
  const onSubmit = async (data: RegisterFormData) => {
    // Validate Fuctions
    const validateEmail = (email: string) => {
      // A regular expression for checking if the email is valid
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };

    const validatePassword = (password: string) => {
      // A regular expression for checking if the password is strong enough
      const passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/;
      return passwordRegex.test(password);
    };
    if (!validateEmail(data.email)) {
      setError('email', { message: 'Please enter a valid email address' });
      return;
    }

    if (!validatePassword(data.password)) {
      setError('password', {
        message:
          'Please enter a strong \npassword with at least 8 characters,\n one letter, one digit, and one special \ncharacter',
      });
      return;
    }

    try {
      setErrorFirebase('');
      setLoading(true);
      await registerWithEmailAndPassword(data.name, data.email, data.password);
      navigate('/');
    } catch {
      setErrorFirebase('Failed to Register');
    }

    setLoading(false);
    alert('RegisterWithEmailAndPassword-> Success!');
  };

  return (
    <div className="register">
      <div className="register__container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            className="register__textBox"
            {...register('name')}
            placeholder="Full Name"
          />
          <div className="register__error">{errors.name && <div>{errors.name.message}</div>}</div>
          <input
            type="text"
            className="register__textBox"
            {...register('email', { required: true })}
            placeholder="E-mail Address"
          />
          <div className="register__error">{errors.email && <div>{errors.email.message}</div>}</div>
          <input
            type="password"
            className="register__textBox"
            {...register('password', { required: true })}
            placeholder="Password"
          />
          <div className="register__error">
            {errors.password && <div>{errors.password.message}</div>}
          </div>
          <div className="register__error">{error && <div>{error}</div>}</div>
          <button disabled={loading} className="register__btn" type="submit">
            Register
          </button>
          <button className="register__btn register__google" onClick={signInWithGoogle}>
            Register with Google
          </button>
        </form>
        <div>
          Already have an account? <Link to="/auth">Login</Link> now.
        </div>
      </div>
    </div>
  );
}
export default Register;
