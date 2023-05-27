import React from 'react';
import styles from './index.module.scss';

export default function ControlButton({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<'button'>) {
  return (
    <button className={(className ? className : '') + ' ' + styles.submitBtn} {...props}>
      {children}
    </button>
  );
}
