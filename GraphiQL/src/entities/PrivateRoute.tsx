import { Route, Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';

import React from 'react';
interface PrivateRouteProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  element: any;
  exact?: boolean;
  path: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element: Component, ...rest }) => {
  const [user] = useAuthState(auth);

  return (
    <Route
      {...rest}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      {...(props: any) => (user ? <Component {...props} /> : <Navigate to="/auth" />)}
    ></Route>
  );
};

export default PrivateRoute;
