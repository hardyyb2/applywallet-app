import type { Edge, Node } from "reactflow";

export type DrFolderType = {
  type: "folder";
  subType:
    | "root"
    | "nested"
    | "dynamic"
    | "dynamic-catch-all"
    | "route-group"
    | "no-route-group";
};

export type DrFileType = {
  type: "file";
  subType: "layout" | "page" | "component" | "test" | "utils" | "types";
};

export type DrNodeDataType = {
  name: string;
  collapsed?: boolean;
  root?: boolean;
} & (DrFileType | DrFolderType);

export type DrNodeType = Node<DrNodeDataType>;

export type DrEdgeDataType = {};

export type DrEdgeType = Edge<DrEdgeDataType>;
