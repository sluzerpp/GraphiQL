// import { lazy } from 'react';
// const AuthForm = lazy(() => import('../../shared/ui/AuthForm'));
import classes from './style.module.scss';

export default function SignPage({ children }: { children: React.ReactElement }) {
  return <div className={`page-content ${classes.page}`}>{children}</div>;
}
