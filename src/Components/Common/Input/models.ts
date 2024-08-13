import { FormEvent, ReactNode } from 'react';

export type IInputProps = {
  type: 'text' | 'password' | 'reset' | 'submit' | 'email';
  value: string | number;
  placeholder?: string;
  label?: string | ReactNode;
  name?: string;
  disabled?: boolean;
  onChange?: (e: FormEvent<HTMLInputElement>) => void;
  onClick?: () => void;
  validate?: (value?: string) => string | null;
  isRequired?: boolean;
  className?: string;
  classNameInput?: string;
  autofocus?: boolean;
  tabIndex?: number;
  changePositionWarningMessage?: boolean;
};
