import React from 'react';
import styles from './index.module.scss';

export default function SubmitButton({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'button'>) {
  return (
    <button className={(className ? className : '') + ' ' + styles.submitBtn} {...props}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 24">
        <path d="M2 24v-24l20 12-20 12z" />
      </svg>
    </button>
  );
}
