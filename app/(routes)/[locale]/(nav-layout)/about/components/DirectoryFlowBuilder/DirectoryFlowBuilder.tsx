"use client";

import React, { MouseEvent } from "react";

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
import {
  collapseChildNodes,
  getLayoutedElements,
} from "./directoryFlowBuilder.utils";

import "reactflow/dist/style.css";

import { DrNodeType } from "@/types/flowbuilder";

const nodeTypes: NodeTypes = {
  custom: CustomNode,
};

const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
  initialNodes,
  initialEdges,
);

const DirectoryFlowBuilder = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(layoutedNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(layoutedEdges);

  const handleNodeClick = (_event: MouseEvent, node: DrNodeType) => {
    const { edges: updatedEdges, nodes: updatedNodes } = collapseChildNodes(
      node,
      nodes,
      edges,
    );

    setNodes(updatedNodes);
    setEdges(updatedEdges);
  };

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
      zoomOnPinch
      zoomOnDoubleClick
      maxZoom={4}
      onNodeClick={handleNodeClick}
    >
      <Background gap={16} />
    </ReactFlow>
  );
};

export { DirectoryFlowBuilder };
