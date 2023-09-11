//import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, signInWithEmailAndPassword, signInWithGoogle } from './firebase';
// import { useAuthState } from 'react-firebase-hooks/auth';
//import AuthForm from '../Login/AuthForm';

import { useCallback } from 'react';

export const useHandler = () => {
  const navigate = useNavigate();
  const handleClick = useCallback(() => {
    console.log(`Clicked button!`);
    // вставить сюда реальные данные пользхователя через пропс
    signInWithEmailAndPassword(auth, 'email', 'password')
      .then(() => {
        alert('Signed-in E-mail -> Welcome!');
        navigate('/');
      })
      .catch((error) => alert(error));
  }, [navigate]);

  return handleClick;
};

// логика авторизации AuthForm
export const handleSignInWithGoogle = () => {
  signInWithGoogle()
    .then(() => {
      alert('Signed-in Google -> Welcome!');
      const navigate = useNavigate();
      navigate('/');
    })
    .catch((error) => alert(error)); // Handle sign-in error
};
