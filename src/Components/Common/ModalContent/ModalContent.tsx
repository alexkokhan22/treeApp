//react
import React from 'react';

//components
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { Modal } from '../Modal/Modal';

//styles
import styles from './styles.module.scss';

//models
import { IModalContentProps } from './models';

export const ModalContent: React.FC<IModalContentProps> = (props) => {
  const {
    value,
    title,
    onChange,
    validate,
    actionButton,
    titleActionButton,
    disabled,
    showModal,
    setShowModal,
    isDeleteNode = false,
    deleteNodeName = '',
  } = props;

  return (
    <>
      {showModal && (
        <Modal>
          <div className={styles.modalContentContainer}>
            <span>{title}</span>
            {isDeleteNode ? (
              <span>{`Do you want to delete ${deleteNodeName}?`}</span>
            ) : (
              <Input
                type={'text'}
                value={value ? value : ''}
                onChange={onChange}
                validate={validate}
              />
            )}
            <div className={styles.modalButtonsContainer}>
              <Button
                onClick={actionButton}
                title={titleActionButton}
                disabled={disabled}
              />
              <Button onClick={() => setShowModal(false)} title={'Cancel'} />
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};
