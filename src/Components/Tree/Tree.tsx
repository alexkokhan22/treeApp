//react
import React, { useEffect, useState } from 'react';

//redux
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../Store/store';
import { createNode, fetchTree } from '../../Store/thunks';

//components
import { ArrowBottomIcon, PlusCircleIcon } from '../../Assets/Svg';
import { Button } from '../Common/Button/Button';
import { ModalContent } from '../Common/ModalContent/ModalContent';
import { TreeNode } from '../TreeNode/TreeNode';

//utils
import { classes } from '../../Utils/classes';
import { textValidation } from '../../Utils/textValidation';

//styles
import styles from './styles.module.scss';

export const Tree: React.FC = () => {
  const [showTreeNodes, setShowTreeNodes] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [newNodeName, setNewNodeName] = useState('');

  const dispatch = useDispatch<AppDispatch>();
  const { nodes, status } = useSelector((state: RootState) => state.tree);

  const handleCreateNode = () => {
    if (nodes && newNodeName.length) {
      dispatch(
        createNode({ parentNodeId: nodes.id, nodeName: newNodeName.trim() }),
      );
      setNewNodeName('');
      setShowModal(false);
    }
  };

  const onChangeNewNodeName = (e: React.FormEvent<HTMLInputElement>) => {
    setNewNodeName((e.target as HTMLInputElement).value);
  };

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchTree());
    }
  }, [status]);

  return (
    <>
      <ModalContent
        title={'Create node'}
        showModal={showModal}
        setShowModal={setShowModal}
        actionButton={handleCreateNode}
        value={newNodeName}
        onChange={onChangeNewNodeName}
        titleActionButton={'Add'}
        disabled={!newNodeName.trim().length}
        validate={() => textValidation(newNodeName)}
      />

      <div className={styles.treeContainer}>
        {status === 'loading' && <p>Loading...</p>}
        {status === 'failed' && <p>Error loading tree</p>}
        {nodes && (
          <div className={styles.tree}>
            <ArrowBottomIcon
              className={classes(
                styles.arrowSvg,
                showTreeNodes && styles.activeSvg,
              )}
              onClick={() => setShowTreeNodes(!showTreeNodes)}
            />
            <span>{nodes.name}</span>
            <Button
              onClick={() => setShowModal(!showModal)}
              icon={<PlusCircleIcon />}
              className={styles.addNodeButton}
            />
          </div>
        )}
        {showTreeNodes && (
          <>
            {nodes &&
              nodes.children.map((node) => (
                <TreeNode key={node.id} node={node} />
              ))}
          </>
        )}
      </div>
    </>
  );
};
