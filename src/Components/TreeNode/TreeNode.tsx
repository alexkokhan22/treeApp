//react
import React, { useState } from 'react';

//redux
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../Store/store';
import { deleteNode, renameNode } from '../../Store/thunks';

//components
import { DeleteIcon, PencilIcon } from '../../Assets/Svg';
import { ModalContent } from '../Common/ModalContent/ModalContent';
import { Button } from '../Common/Button/Button';

//utils
import { textValidation } from '../../Utils/textValidation';

//styles
import styles from './styles.module.scss';

//models
import { ITreeNodeProps } from './models';

export const TreeNode: React.FC<ITreeNodeProps> = ({ node }) => {
  const [showRenameNodeModal, setShowRenameNodeModal] = useState(false);
  const [showDeleteNodeModal, setShowDeleteNodeModal] = useState(false);
  const [newName, setNewName] = useState(node.name);

  const dispatch = useDispatch<AppDispatch>();

  const handleDelete = () => {
    dispatch(deleteNode(node.id));
  };

  const handleRename = () => {
    dispatch(renameNode({ id: node.id, newName }));
    setShowRenameNodeModal(false);
  };

  const onChangeNewNodeName = (e: React.FormEvent<HTMLInputElement>) => {
    setNewName((e.target as HTMLInputElement).value);
  };

  return (
    <>
      <ModalContent
        title={'Rename node'}
        showModal={showRenameNodeModal}
        setShowModal={setShowRenameNodeModal}
        actionButton={handleRename}
        value={newName}
        onChange={onChangeNewNodeName}
        titleActionButton={'Rename'}
        disabled={!newName.trim().length}
        validate={() => textValidation(newName)}
      />

      <ModalContent
        title={'Delete node'}
        showModal={showDeleteNodeModal}
        setShowModal={setShowDeleteNodeModal}
        actionButton={handleDelete}
        titleActionButton={'Delete'}
        isDeleteNode
        deleteNodeName={node.name}
      />

      <div className={styles.treeNodeContainer}>
        <span>{node.name}</span>
        <div className={styles.treeNodeButtonsContainer}>
          <Button
            onClick={() => setShowRenameNodeModal(true)}
            icon={<PencilIcon />}
          />
          <Button
            onClick={() => setShowDeleteNodeModal(true)}
            icon={<DeleteIcon />}
          />
        </div>
      </div>
    </>
  );
};
