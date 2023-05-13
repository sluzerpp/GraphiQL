import { useEffect } from 'react';
// import { lazy } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../entities/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { onAuthStateChanged } from 'firebase/auth';

export default function Welcome() {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  useEffect(() => {
    // токен авторизации
    //const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      // const uid = user.uid;
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        console.log('We have User Now', uid);
      } else {
        // User is signed out
        navigate('/auth');
      }
    });
  }, [navigate]);

  return (
    <div>
      Welcome Page
      <br></br>
      <Link to="/auth">Login</Link>
      <br></br>
      <Link to="/dashboard">Dashboard</Link>
      <div>Welcome {user?.email}</div>
    </div>
  );
}
