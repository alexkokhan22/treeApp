//react
import React, { memo } from 'react';

//utils
import { classes } from '../../../Utils/classes';

//models
import { IButtonProps } from './models';

export const Button = memo(function Button(props: IButtonProps) {
  const { title, className, onClick, icon, ...otherProps } = props;

  const clickInterception = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button
      {...otherProps}
      onClick={clickInterception}
      className={classes(className || '')} // Обработка undefined с помощью пустой строки
    >
      {title} {icon}
    </button>
  );
});
