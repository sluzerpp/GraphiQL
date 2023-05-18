import React from 'react';
import './index.scss';

export default function ControlSideBar({
  children,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div className="control-sidebar" {...props}>
      {children}
    </div>
  );
}
