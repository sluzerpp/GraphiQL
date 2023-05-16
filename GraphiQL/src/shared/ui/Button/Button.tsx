import classes from './style.module.scss';
import { type ReactNode } from 'react';
import Icon from '@/shared/ui/Icon/Icon';

interface ButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
  isLoading?: boolean;
  type?: 'submit';
}

export default function Button({ onClick, children, isLoading, type }: ButtonProps) {
  return (
    <button type={type} className={classes.button} onClick={onClick}>
      {isLoading ? <Icon className={classes.loader} type="loader" /> : children}
    </button>
  );
}
