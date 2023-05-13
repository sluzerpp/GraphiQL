import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
const WelcomePage = lazy(() => import('./welcome'));
// import WelcomePage from '../pages/welcome/index';
// import Auth from './authorization/Auth';
//const Auth = lazy(() => import('./authorization/Auth'));
import AuthForm from '../entities/AuthForm';
import Register from '../entities/Register';
import Reset from '../entities/Reset';
import Dashboard from '../entities/Dashboard';
import PrivateRoute from '../entities/PrivateRoute';
import { AuthContext } from '../entities/Auth';
import { auth } from '../entities/firebase';
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
