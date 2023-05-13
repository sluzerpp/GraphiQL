import { useEffect, useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, signInWithEmailAndPassword, signInWithGoogle } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { AuthContext } from './Auth';
import './AuthForm.css';
// import { limitToLast } from 'firebase/firestore';
// import firebase from 'firebase/compat/app';
/*interface IAuthUser {
  id: string | undefined;
  email: string | null | undefined;
  token: string | undefined;
} */

export default function AuthForm() {
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
    <div className="login">
      <div className="login__container">
        <input
          type="text"
          className="login__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className="login__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button className="login__btn" onClick={handleSignIn}>
          Login
        </button>
        <button className="login__btn login__google" onClick={handleSignInWithGoogle}>
          Login with Google
        </button>
        <div>
          <Link to="/reset">Forgot Password</Link>
        </div>
        <div>
          Dont have an account? <Link to="/register">Register</Link> now.
        </div>
      </div>
    </div>
  );
}
