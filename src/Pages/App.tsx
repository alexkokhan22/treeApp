//react
import React from 'react';

//redux
import { Provider } from 'react-redux';
import { store } from '../Store/store';

//components
import { Tree } from '../Components/Tree/Tree';

//styles
import styles from './styles.module.scss';

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className={styles.appContainer}>
        <h1>Editable Tree</h1>
        <Tree />
      </div>
    </Provider>
  );
};
