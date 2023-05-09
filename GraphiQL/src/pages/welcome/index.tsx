import { useEffect } from 'react';
// import { lazy } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../entities/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

export default function Welcome() {
  const navigate = useNavigate();

  const [user] = useAuthState(auth);
  useEffect(() => {
    if (!user) {
      navigate('/auth');
    }
  }, [navigate, user]);

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
