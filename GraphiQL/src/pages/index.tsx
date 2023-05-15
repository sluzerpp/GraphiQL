import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
const WelcomePage = lazy(() => import('./welcome'));
// import WelcomePage from '../pages/welcome/index';
// import Auth from './authorization/Auth';
//const Auth = lazy(() => import('./authorization/Auth'));
import AuthForm from '../features/Login/AuthForm';
import Register from '../features/Register/Register';
import Reset from '../features/Reset/Reset';
import Dashboard from '../features/Dashboard/Dashboard';
import PrivateRoute from '../features/Dashboard/PrivateRoute';
import { AuthContext } from '../features/authentication/ValidateAccessToken/Auth';
import { auth } from '../features/authentication/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

export default function Routing() {
  console.log(PrivateRoute);
  const [user] = useAuthState(auth);
  // сука не работает <PrivateRoute exact path="/" element={<Dashboard />} />
  // Uncaught Error: [PrivateRoute] is not a <Route> component.
  // All component children of <Routes> must be a <Route> or <React.Fragment>
  // <PrivateRoute path="/" component={WelcomePage} />
  return (
    <AuthContext.Provider value={{ currentUser: user }}>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/auth" element={<AuthForm />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </AuthContext.Provider>
  );
}
