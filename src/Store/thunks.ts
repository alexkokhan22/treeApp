//redux
import { createAsyncThunk } from '@reduxjs/toolkit';

//axios
import axios from 'axios';

//models
import { ITreeNode } from './models';

//url api
const baseApiUrl = 'https://test.vmarmysh.com';
const apiUrl = `${baseApiUrl}/api.user.tree`;
const nodeUrl = `${baseApiUrl}/api.user.tree.node`;

const treeName = 'testApiTree';

export const fetchTree = createAsyncThunk('tree/fetchTree', async () => {
  const response = await axios.post<ITreeNode>(`${apiUrl}.get`, null, {
    params: { treeName },
  });
  return response.data;
});

export const createNode = createAsyncThunk(
  'tree/createNode',
  async ({
    parentNodeId,
    nodeName,
  }: {
    parentNodeId: number;
    nodeName: string;
  }) => {
    const response = await axios.post(`${nodeUrl}.create`, null, {
      params: {
        parentNodeId,
        nodeName,
        treeName,
      },
    });
    return response.data;
  },
);

export const deleteNode = createAsyncThunk(
  'tree/deleteNode',
  async (nodeId: number) => {
    await axios.post(`${nodeUrl}.delete`, null, {
      params: {
        treeName,
        nodeId: nodeId,
      },
    });
    return nodeId;
  },
);

export const renameNode = createAsyncThunk(
  'tree/renameNode',
  async ({ id, newName }: { id: number; newName: string }) => {
    await axios.post(`${nodeUrl}.rename`, null, {
      params: {
        treeName: 'testApiTree',
        nodeId: id,
        newNodeName: newName,
      },
    });
    return { id, newName };
  },
);
