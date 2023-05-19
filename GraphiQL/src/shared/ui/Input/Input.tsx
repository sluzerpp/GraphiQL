import { UseFormRegisterReturn } from 'react-hook-form';
import classes from './style.module.scss';

type Props = {
  type: string;
  placeholder: string;
  register?: UseFormRegisterReturn<string>;
  onChange?: (e: Event) => void;
  value?: string;
};

export function Input({ type, placeholder, register, value }: Props) {
  return (
    <input
      type={type}
      className={classes.input}
      placeholder={placeholder}
      value={value}
      {...register}
    />
  );
}
