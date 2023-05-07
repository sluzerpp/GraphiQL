import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const WelcomePage = lazy(() => import('./welcome'));
// import Auth from './authorization/Auth';
//const Auth = lazy(() => import('./authorization/Auth'));
import AuthForm from '../shared/ui/AuthForm';
import Register from '../shared/ui/Register';
import Reset from '../shared/ui/Reset';
import Dashboard from '../shared/ui/Dashboard';

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />}></Route>
      <Route path="/auth" element={<AuthForm />} />
      <Route path="/register" element={<Register />} />
      <Route path="/reset" element={<Reset />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}
