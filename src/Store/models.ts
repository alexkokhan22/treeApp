export interface ITreeNode {
  id: number;
  name: string;
  children: ITreeNode[];
}

export interface ITreeState {
  nodes: ITreeNode | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

export const initialState: ITreeState = {
  nodes: null,
  status: 'idle',
  error: null,
};
