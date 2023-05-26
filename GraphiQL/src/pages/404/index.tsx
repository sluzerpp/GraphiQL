import classes from './style.module.scss';
import img from 'assets/img/notFound.png';

export default function NotFound() {
  return (
    <div className={`page-content ${classes.page}`}>
      <div className={classes.content}>
        <h1 className={classes.text}>This Universe does not exist. Wubba Lubba Dub Dub!</h1>
        <img className={classes.image} src={img} alt="image" />
      </div>
    </div>
  );
}
