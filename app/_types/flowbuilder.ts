import { Edge, Node } from "reactflow";

export type DrNodeDataType = {
  name: string;
};

export type DrNodeType = Node<DrNodeDataType>;

export type DrEdgeDataType = {};

export type DrEdgeType = Edge<DrEdgeDataType>;
