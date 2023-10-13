"use client";

import {
  Background,
  NodeTypes,
  ReactFlow,
  useEdgesState,
  useNodesState,
} from "reactflow";

import {
  edges as initialEdges,
  nodes as initialNodes,
} from "@/bin/folderStructure";

import { CustomNode } from "../CustomNode";
import { getLayoutedElements } from "./directoryFlowBuilder.utils";

import "reactflow/dist/style.css";

import { useThemeColors } from "@/hooks/useThemeColors";

const nodeTypes: NodeTypes = {
  custom: CustomNode,
};

const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
  initialNodes,
  initialEdges,
);

const DirectoryFlowBuilder = () => {
  const themeColors = useThemeColors();
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
      <Background gap={16} />
    </ReactFlow>
  );
};

export { DirectoryFlowBuilder };
