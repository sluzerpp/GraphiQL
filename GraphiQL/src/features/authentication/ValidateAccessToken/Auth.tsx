import React, { useEffect, useState, ReactNode } from 'react';
import { auth } from '../firebase';
import { User } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export interface AuthContextType {
  currentUser: User | null | undefined;
}

export interface Props {
  children?: ReactNode;
  // any props that come into the component
}
/* const Button1 = ({ children, ...props }: Props) => (
  <Button {...props}>{children}</Button>
); */

export const AuthContext = React.createContext<AuthContextType>({ currentUser: null });

export const AuthProvider = ({ children }: Props) => {
  const [currentUser, setCurrentUser] = useState<UserOrNull>(null);
  const [pending, setPending] = useState(true);
  type UserOrNull = User | null;
  const navigate = useNavigate();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      // при 🔴🔴🔴 изменении состояния пользователя идем на главную
      // проверить как работает- по истечению 60 минут
      if (user !== null) {
        // setCurrentUser(auth.currentUser);
        // setPending(false);
        // нужно чтобы разлогинивался
        navigate('/auth');
        setCurrentUser(null);
        setPending(true);
      } else {
        navigate('/auth');
        setCurrentUser(null);
        setPending(true);
      }
    });
  }, [navigate]);

  if (pending) {
    console.log('Loading...');
    // return 'Loading...';
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
