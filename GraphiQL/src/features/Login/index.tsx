'use client';
import { useEffect, useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, signInWithEmailAndPassword, signInWithGoogle } from '../authentication/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { AuthContext } from '../authentication/ValidateAccessToken/Auth';
import classes from './style.module.scss';
import Button from '@/shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { Input } from '@/shared/ui/Input/Input';
import { ToastContainer, toast } from 'react-toastify';

export default function AuthForm() {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      return;
    }
  }, [user, loading, navigate]);
  if (error) {
    console.error(error);
  }

  const { currentUser } = useContext(AuthContext);
  // берем из контекста AuthContext
  // если мы вошли то идем на главную -> navigate('/');
  if (currentUser) {
    navigate('/main');
  }

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate('/main');
      })
      .catch((error) => {
        console.log(error.message);
        toast.error('Oops! Something went wrong.');
        throw new Error('Log-in Error Occurred');
      });
  };

  const handleSignInWithGoogle = () => {
    signInWithGoogle()
      .then(() => {
        navigate('/main');
      })
      .catch((error) => {
        console.log(error.message);
        throw new Error('Log-in Error Occurred');
      });
  };

  return (
    <div className={classes.login}>
      <div className={classes.login__container}>
        <Input value={email} onChange={setEmail} placeholder={t('forms.common.email')} />
        <Input
          type="password"
          value={password}
          onChange={setPassword}
          placeholder={t('forms.common.password')}
        />
        <Button style="black" onClick={handleSignIn}>
          {t('forms.auth.button')}
        </Button>
        <Button style="blue" onClick={handleSignInWithGoogle}>
          {t('forms.auth.buttonGoogle')}
        </Button>
        <div>
          <Link to="/reset">{t('forms.auth.reset')}</Link>
        </div>
        <div>
          {t('forms.auth.notes.note1')} <Link to="/register">{t('forms.auth.notes.link')}</Link>{' '}
          {t('forms.auth.notes.note2')}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
