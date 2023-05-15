import { Route, Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../authentication/firebase';
import React from 'react';

interface PrivateRouteProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: any;
  exact?: boolean;
  path: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, ...rest }) => {
  const [user] = useAuthState(auth);

  if (user) {
    return <Route {...rest} Component={Component} />;
  } else {
    return <Navigate to="/auth" />;
  }
};

export default PrivateRoute;
