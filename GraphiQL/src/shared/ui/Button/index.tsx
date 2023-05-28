import classes from './style.module.scss';
import { type ReactNode } from 'react';
import Icon from '@/shared/ui/Icon/Icon';

interface ButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
  isLoading?: boolean;
  type?: 'submit';
  style?: 'default' | 'blue' | 'black';
  disabled?: boolean;
}

export default function Button({
  onClick,
  children,
  isLoading,
  type,
  style = 'default',
  disabled = false,
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`${classes.button} ${classes[`button_${style}`]}`}
      onClick={onClick}
    >
      {isLoading ? <Icon className={classes.loader} type="loader" /> : children}
    </button>
  );
}
