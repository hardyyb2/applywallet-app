import { ComponentType } from "react";

import dagre from "dagre";
import {
  Edge,
  getConnectedEdges,
  getOutgoers,
  Node,
  NodeProps,
  Position,
} from "reactflow";

import { DrEdgeType, DrNodeDataType, DrNodeType } from "@/types/flowbuilder";

import { CustomNode } from "../nodes/CustomNode";

export enum DrNodes {
  CUSTOM = "custom",
}

export const drReactFlowNodeTypes: {
  [key in DrNodes]: ComponentType<NodeProps<DrNodeDataType>>;
} = {
  [DrNodes.CUSTOM]: CustomNode,
};

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

/** create a tree layout for the nodes */
export const getLayoutedElements = (
  nodes: DrNodeType[],
  edges: DrEdgeType[],
): {
  nodes: DrNodeType[];
  edges: DrEdgeType[];
  rootNode: null | DrNodeType;
} => {
  const [NODE_WIDTH, NODE_HEIGHT] = [250, 100];
  let rootNode: DrNodeType | null = null;

  dagreGraph.setGraph({ rankdir: "TB" });

  nodes.forEach((node) => {
    dagreGraph.setNode(node.id, {
      width: node.width ?? NODE_WIDTH,
      height: node.height ?? NODE_HEIGHT,
    });
  });

  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  dagre.layout(dagreGraph);

  nodes.forEach((node) => {
    const nodeWithPosition = dagreGraph.node(node.id);
    node.targetPosition = Position.Top;
    node.sourcePosition = Position.Bottom;

    node.position = {
      x: nodeWithPosition.x - (node.width || NODE_WIDTH) / 2,
      y: nodeWithPosition.y - (node.height || NODE_HEIGHT) / 2,
    };

    if (node.data.root) {
      rootNode = node;
    }

    return node;
  });

  return { nodes, edges, rootNode };
};

const hideNodes =
  (hidden: boolean, childEdgesID: string[], childNodesID: string[]) =>
  (node: Node) => {
    if (childEdgesID.includes(node.id) || childNodesID.includes(node.id)) {
      node.hidden = hidden;
    }

    return node;
  };

const hideEdges =
  (hidden: boolean, childEdgesID: string[], childNodesID: string[]) =>
  (edge: Edge) => {
    if (childEdgesID.includes(edge.id) || childNodesID.includes(edge.id)) {
      edge.hidden = hidden;
    }

    return edge;
  };

// TODO - write tests for this
export const collapseChildNodes = (
  currentNode: DrNodeType,
  nodes: DrNodeType[],
  edges: DrEdgeType[],
) => {
  const [outgoers, connectedEdges, stack]: [
    DrNodeType[],
    DrEdgeType[],
    DrNodeType[],
  ] = [[], [], []];

  const currentNodeId = currentNode.id;

  stack.push(currentNode);

  while (stack.length > 0) {
    const lastNode = stack.pop();

    if (lastNode) {
      const childNodes = getOutgoers(lastNode, nodes, edges);
      /** filter out incoming edges from all connected edges  */
      const childEdges = getConnectedEdges([lastNode], edges).filter(
        (ed) => ed.target !== currentNodeId,
      );

      childNodes.map((goer) => {
        stack.push(goer);
        outgoers.push(goer);
      });
      childEdges.map((edge) => {
        connectedEdges.push(edge);
      });
    }
  }

  const childNodeIds = outgoers.map((node) => node.id);
  const childEdgeIds = connectedEdges.map((edge) => edge.id);

  const isNodeCollapsed = !!currentNode.data.collapsed;
  const switchCollapse = !isNodeCollapsed;

  const updatedNodes = nodes.map((node) => {
    if (node.id === currentNodeId) {
      node.data.collapsed = switchCollapse;
    }
    return hideNodes(switchCollapse, childEdgeIds, childNodeIds)(node);
  });

  const updatedEdges = edges.map(
    hideEdges(switchCollapse, childEdgeIds, childNodeIds),
  );

  return { nodes: updatedNodes, edges: updatedEdges };
};
