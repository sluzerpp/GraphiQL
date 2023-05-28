import classes from './style.module.scss';
import 'react-toastify/dist/ReactToastify.css';

export default function SignPage({ children }: { children: React.ReactElement }) {
  return <div className={`page-content ${classes.page}`}>{children}</div>;
}
