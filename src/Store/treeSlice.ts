//redux
import { createSlice } from '@reduxjs/toolkit';

//models
import { initialState, ITreeNode } from './models';

//thunks
import { createNode, deleteNode, fetchTree, renameNode } from './thunks';

const treeSlice = createSlice({
  name: 'tree',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTree.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTree.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.nodes = action.payload;
      })
      .addCase(fetchTree.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch tree';
      })
      .addCase(createNode.fulfilled, (state) => {
        state.status = 'idle';
      })
      .addCase(deleteNode.fulfilled, (state, action) => {
        if (state.nodes) {
          state.nodes.children = state.nodes.children.filter(
            (node) => node.id !== action.payload,
          );
        }
      })
      .addCase(renameNode.fulfilled, (state, action) => {
        const { id, newName } = action.payload;
        const findAndRenameNode = (nodes: ITreeNode[]) => {
          for (const node of nodes) {
            if (node.id === id) {
              node.name = newName;
              return;
            }
            if (node.children.length > 0) {
              findAndRenameNode(node.children);
            }
          }
        };
        if (state.nodes) {
          findAndRenameNode([state.nodes]);
        }
      });
  },
});

export const treeReducer = treeSlice.reducer;
