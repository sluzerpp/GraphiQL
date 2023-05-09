import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const WelcomePage = lazy(() => import('./welcome'));
// import Auth from './authorization/Auth';
//const Auth = lazy(() => import('./authorization/Auth'));
import AuthForm from '../entities/AuthForm';
import Register from '../entities/Register';
import Reset from '../entities/Reset';
import Dashboard from '../entities/Dashboard';
import PrivateRoute from '../entities/PrivateRoute';

export default function Routing() {
  console.log(PrivateRoute);
  //   сука не работает <PrivateRoute exact path="/" element={<Dashboard />} />
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/auth" element={<AuthForm />} />
      <Route path="/register" element={<Register />} />
      <Route path="/reset" element={<Reset />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}
