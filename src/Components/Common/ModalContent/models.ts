import { FormEvent } from 'react';

export interface IModalContentProps {
  value?: string;
  title: string;
  onChange?: (e: FormEvent<HTMLInputElement>) => void;
  validate?: (value?: string) => string | null;
  titleActionButton: string;
  actionButton: () => void;
  disabled?: boolean;
  showModal: boolean;
  setShowModal: (state: boolean) => void;
  isDeleteNode?: boolean;
  deleteNodeName?: string;
}
