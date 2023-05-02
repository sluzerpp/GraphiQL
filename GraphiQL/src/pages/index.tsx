import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const WelcomePage = lazy(() => import('./welcome'));

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />}></Route>
    </Routes>
  );
}
