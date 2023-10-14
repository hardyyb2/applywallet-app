import { Edge, Node } from "reactflow";

export type DrNodeDataType = {
  name: string;
  collapsed?: boolean;
  root?: boolean;
};

export type DrNodeType = Node<DrNodeDataType>;

export type DrEdgeDataType = {};

export type DrEdgeType = Edge<DrEdgeDataType>;
