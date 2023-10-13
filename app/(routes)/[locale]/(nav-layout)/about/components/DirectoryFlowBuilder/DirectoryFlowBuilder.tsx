"use client";

import React, { MouseEvent } from "react";

import {
  Background,
  NodeTypes,
  ReactFlow,
  ReactFlowProvider,
  useEdgesState,
  useNodesState,
  useReactFlow,
} from "reactflow";

import {
  edges as initialEdges,
  nodes as initialNodes,
} from "@/bin/folderStructure";

import { DrNodeType } from "@/types/flowbuilder";

import { CustomNode } from "../nodes/CustomNode";
import {
  collapseChildNodes,
  getLayoutedElements,
} from "./directoryFlowBuilder.utils";

import "reactflow/dist/style.css";

const nodeTypes: NodeTypes = {
  custom: CustomNode,
};

const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
  initialNodes,
  initialEdges,
);

const FlowBuilder = () => {
  const { setCenter } = useReactFlow();
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

  const onInit = () => {
    // TODO - find with layouted function
    const appNode = nodes.find((node) => node.data.name === "app");

    setCenter(appNode?.position.x ?? 0, appNode?.position.y ?? 0, {
      zoom: 1,
    });
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
      minZoom={0.1}
      onNodeClick={handleNodeClick}
      nodesConnectable={false}
      onInit={onInit}
    >
      <Background gap={16} />
    </ReactFlow>
  );
};

const DirectoryFlowBuilder = () => {
  return (
    <ReactFlowProvider>
      <FlowBuilder />
    </ReactFlowProvider>
  );
};

export { DirectoryFlowBuilder };
