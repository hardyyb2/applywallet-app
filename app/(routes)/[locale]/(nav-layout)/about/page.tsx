"use client";

import dagre from "dagre";
import {
  Background,
  Edge,
  Node,
  NodeTypes,
  Position,
  ReactFlow,
  useEdgesState,
  useNodesState,
} from "reactflow";

import "reactflow/dist/style.css";

import treeData from "app/_bin/folder_structure.json";

import { CustomNode } from "./CustomNode";

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

const getLayoutedElements = (nodes: Node[], edges: Edge[]) => {
  dagreGraph.setGraph({ rankdir: "TB" });

  nodes.forEach((node) => {
    dagreGraph.setNode(node.id, {
      width: node.width ?? 200,
      height: node.height ?? 100,
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
      x: nodeWithPosition.x - (node.width || 200) / 2,
      y: nodeWithPosition.y - (node.height || 200) / 2,
    };

    return node;
  });

  return { nodes, edges };
};

const { nodes: initialNodes, edges: initialEdges } = treeData as {
  nodes: Node[];
  edges: Edge[];
};

const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
  initialNodes,
  initialEdges,
);

const nodeTypes: NodeTypes = {
  custom: CustomNode,
};

const About = () => {
  // TODO - validate with zod

  const [nodes, _setNodes, onNodesChange] = useNodesState(layoutedNodes);
  const [edges, _setEdges, onEdgesChange] = useEdgesState(layoutedEdges);

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      fitView
      attributionPosition="top-right"
      nodeTypes={nodeTypes}
      nodesDraggable
    >
      <Background color="#aaa" gap={16} />
    </ReactFlow>
  );
};

export default About;
