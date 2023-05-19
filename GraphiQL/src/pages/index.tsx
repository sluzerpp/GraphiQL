import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
const WelcomePage = lazy(() => import('./welcome'));
const MainPage = lazy(() => import('./main'));
// import WelcomePage from '../pages/welcome/index';
// import Auth from './authorization/Auth';
//const Auth = lazy(() => import('./authorization/Auth'));
import Register from '../features/Register';
import Reset from '../features/Reset/Reset';
import Dashboard from '../features/Dashboard/Dashboard';
// import PrivateRoute from '../features/Dashboard/PrivateRoute';
import { AuthContext } from '../features/authentication/ValidateAccessToken/Auth';
import { auth } from '../features/authentication/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import classes from './style.module.scss';
import Footer from 'entities/footer';
import Header from 'entities/header';
import SignPage from './sign';
import AuthForm from '@/features/Login';

export default function Routing() {
  const [user] = useAuthState(auth);
  // !!!! 🔴🔴🔴 НЕ РАБОТАЕТ -> <PrivateRoute exact path="/" element={<Dashboard />} />
  // Uncaught Error: [PrivateRoute] is not a <Route> component.
  // All component children of <Routes> must be a <Route> or <React.Fragment>
  // <PrivateRoute path="/" component={WelcomePage} />
  return (
    <div className={classes.wrapper}>
      <Header />
      <AuthContext.Provider value={{ currentUser: user }}>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route
            path="/auth"
            element={
              <SignPage>
                <AuthForm />
              </SignPage>
            }
          />
          <Route
            path="/register"
            element={
              <SignPage>
                <Register />
              </SignPage>
            }
          />
          <Route path="/reset" element={<Reset />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <Footer />
      </AuthContext.Provider>
    </div>
  );
}
