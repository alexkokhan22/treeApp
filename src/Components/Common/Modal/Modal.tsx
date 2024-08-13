//react
import React from 'react';

//styles
import styles from './styles.module.scss';

//models
import { IModalProps } from './models';

export const Modal: React.FC<IModalProps> = ({ children }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modalContainer}>{children} </div>
    </div>
  );
};
