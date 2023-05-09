import Footer from 'entities/footer';
import Header from 'entities/header';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import classes from './style.module.scss';

const WelcomePage = lazy(() => import('./welcome'));

export default function Routing() {
  return (
    <div className={classes.wrapper}>
      <Header />
      <Routes>
        <Route path="/" element={<WelcomePage />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}
