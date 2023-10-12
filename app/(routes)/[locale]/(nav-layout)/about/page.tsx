"use client";

import {
  Background,
  Edge,
  Node,
  NodeTypes,
  ReactFlow,
  useEdgesState,
  useNodesState,
} from "reactflow";

import "reactflow/dist/style.css";

import treeData from "app/_bin/folder_structure.json";

import { CustomNode } from "./CustomNode";

const nodeTypes: NodeTypes = {
  custom: CustomNode,
};

const About = () => {
  // TODO - validate with zod
  const { nodes: initialNodes, edges: initialEdges } = treeData as {
    nodes: Node[];
    edges: Edge[];
  };

  const [nodes, _setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, _setEdges, onEdgesChange] = useEdgesState(initialEdges);

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
