import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, signInWithEmailAndPassword, signInWithGoogle } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
// import { AuthContext } from './Auth';
import './AuthForm.css';
// import firebase from 'firebase/compat/app';

export default function AuthForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, loading, error] = useAuthState(auth);
  // const [setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    // выведем токен
    console.log(auth.currentUser?.getIdToken());
    // onIdTokenChanged
    console.log('onIdTokenChanged', auth.currentUser?.getIdToken(/*forceRefresh=*/ true));
  }, [user, loading, navigate]);
  if (error) {
    console.error(error);
  }
  /* берем из контекста
  const { currentUser } = useContext(AuthContext);
  console.log('Context currentUser>>', currentUser);
  if (currentUser) {
    return navigate('/');
  }*/

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert('Signed-in E-mail -> Welcome!');
        navigate('/');
      })
      .catch((error) => alert(error));
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
