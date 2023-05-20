// import { lazy } from 'react';
// const AuthForm = lazy(() => import('../../shared/ui/AuthForm'));
import classes from './style.module.scss';
import img from 'assets/img/notFound.png';

export default function NotFound() {
  return (
    <div className={`page-content ${classes.page}`}>
      <div>
        <h1>This Universe does not exist. Wubba Lubba Dub Dub!</h1>
        <img src={img} alt="image" />
      </div>
    </div>
  );
}
