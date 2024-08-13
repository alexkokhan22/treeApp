import React, { ReactElement } from 'react';

export interface IButtonProps {
  title?: string | ReactElement;
  disabled?: boolean;
  onClick?: ((e: React.MouseEvent<HTMLElement>) => void) | undefined;
  icon?: ReactElement | null;
  className?: string | undefined;
  tabIndex?: number;
  autoFocus?: boolean;
}
