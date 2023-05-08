import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const WelcomePage = lazy(() => import('./welcome'));
const MainPage = lazy(() => import('./main'));

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />}></Route>
      <Route path="/main" element={<MainPage />}></Route>
    </Routes>
  );
}
