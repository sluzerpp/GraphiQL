//import { useEffect, useState } from 'react';
// import { lazy } from 'react';
import { Link } from 'react-router-dom';
import { auth, logout } from '../../shared/ui/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

export default function Welcome() {
  const [user] = useAuthState(auth);
  const authUser = user?.email;

  return (
    <div>
      Welcome Page
      <br></br>
      <Link to="/auth">Login</Link>
      <br></br>
      <Link to="/dashboard">Dashboard</Link>
      <div>User- {authUser}</div>
      <button className="login__btn" onClick={logout}>
        Logout
      </button>
    </div>
  );
}
