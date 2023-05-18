import { useEffect, useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, signInWithEmailAndPassword, signInWithGoogle } from '../authentication/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { AuthContext } from '../authentication/ValidateAccessToken/Auth';
import classes from './style.module.scss';
import Button from '@/shared/ui/Button';
import { useTranslation } from 'react-i18next';
// import { useForm } from 'react-hook-form';
// добавить сюда валидацию полей формы
// import { limitToLast } from 'firebase/firestore';
// import firebase from 'firebase/compat/app';
/*interface IAuthUser {
  id: string | undefined;
  email: string | null | undefined;
  token: string | undefined;
} */

export default function AuthForm() {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, loading, error] = useAuthState(auth);
  // const [authUser, setAuthUser] = useState<IAuthUser | null>(null);
  // const [setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
  }, [user, loading, navigate]);
  if (error) {
    console.error(error);
  }

  const { currentUser } = useContext(AuthContext);
  console.log('Context currentUser token >>', currentUser?.refreshToken);
  // берем из контекста AuthContext
  // если мы вошли то идем на главную -> navigate('/');
  if (currentUser) {
    console.log('currentUser - там лежит>>>', currentUser);
    navigate('/');
  }

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        /*const authUser: IAuthUser = {
          id: user?.uid,
          email: user?.email,
          token: user?.refreshToken,
        }; 
        if (currentUser) {
          console.log('currentUser - там лежит>>>', currentUser);
          navigate('/');
        }
        */
        // setAuthUser(authUser);
        // console.log('Auth User - там лежит', authUser);
        navigate('/');
        alert('Signed-in E-mail -> Welcome!');
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const handleSignInWithGoogle = () => {
    signInWithGoogle()
      .then(() => {
        alert('Signed-in Google -> Welcome!');
        navigate('/');
      })
      .catch((error) => alert(error)); // Handle sign-in error
  };

  return (
    <div className={classes.login}>
      <div className={classes.login__container}>
        <input
          type="text"
          className={classes.login__textBox}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t('forms.common.email') || ''}
        />
        <input
          type="password"
          className={classes.login__textBox}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder={t('forms.common.password') || ''}
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
          {t('forms.auth.notes.note1')} <Link to="/register">{t('forms.auth.notes.link')}</Link>
          {t('forms.auth.notes.note2')}
        </div>
      </div>
    </div>
  );
}