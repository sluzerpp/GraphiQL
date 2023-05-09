import React, { useEffect, useState, ReactNode } from 'react';
import { auth } from './firebase';
// import { useAuthState } from 'react-firebase-hooks/auth';
import { User } from 'firebase/auth';

export interface AuthContextType {
  currentUser: User | null;
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
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user !== null) {
        setCurrentUser(auth.currentUser);
        setPending(false);
      }
    });
  }, []);

  /* if (pending) {
    return 'Loading...';
  }*/

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
