import React from 'react';
import css from './Icon.module.scss';
import cn from 'classnames';

export type IconType =
  | 'cart'
  | 'like'
  | 'liked'
  | 'user'
  | 'sun'
  | 'moon'
  | 'loader'
  | 'x'
  | 'chevronDown'
  | 'error'
  | 'toggleRight';

export type IconProps = {
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  type: IconType;
};

export default function Icon(props: IconProps) {
  return (
    <div
      className={cn(css.root, { [css.root_clickable]: Boolean(props.onClick) }, props.className)}
      onClick={props.onClick}
    >
      <div className={css.icon} style={{ backgroundImage: `url("/images/${props.type}.svg")` }} />
    </div>
  );
}
