import Button from 'shared/ui/button';
import classes from './style.module.scss';
import icon from 'assets/svg/logo.svg';

// interface HeaderProps {}

export default function Header({}) {
  return (
    <header className={`${classes.header} container`}>
      <a href="/">
        <img src={icon} alt="" className={classes.icon} />
      </a>
      <nav className={classes.nav}>
        <Button>Sign In</Button>
        <Button>Sign Up</Button>
      </nav>
    </header>
  );
}
