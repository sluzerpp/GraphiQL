import { UseFormRegisterReturn } from 'react-hook-form';
import classes from './style.module.scss';

type Props = {
  type?: string;
  placeholder: string;
  register?: UseFormRegisterReturn<string>;
  onChange?: (arg: string) => void;
  value?: string;
};

export function Input({ register, onChange, ...args }: Props) {
  return (
    <input
      className={classes.input}
      onChange={(e) => onChange && onChange(e.target.value)}
      {...args}
      {...register}
    />
  );
}
