import classes from './style.module.scss';

interface ButtonProps {
  children: string;
}

export default function Button({ children }: ButtonProps) {
  return <button className={classes.button}>{children}</button>;
}
