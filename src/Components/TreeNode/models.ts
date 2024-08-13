export interface ITreeNodeProps {
  node: {
    id: number;
    name: string;
    children?: ITreeNodeProps['node'][];
  };
}
