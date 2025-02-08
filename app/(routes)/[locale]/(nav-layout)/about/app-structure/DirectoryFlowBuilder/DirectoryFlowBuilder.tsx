"use client";

import React, {
  Fragment,
  useRef,
  type ComponentRef,
  type MouseEvent,
} from "react";

import {
  Background,
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

import type { DrEdgeType, DrNodeType } from "@/types/flowbuilder";

import {
  collapseChildNodes,
  drReactFlowNodeTypes,
  getLayoutedElements,
} from "./directoryFlowBuilder.utils";

import "@/styles/overrides/reactflow.scss";

const {
  nodes: layoutedNodes,
  edges: layoutedEdges,
  rootNode,
} = getLayoutedElements(initialNodes, initialEdges);

const FlowBuilder = () => {
  // hooks
  const { setCenter } = useReactFlow();
  const ref = useRef<ComponentRef<typeof ReactFlow>>(null);

  // states
  const [nodes, setNodes, onNodesChange] = useNodesState(layoutedNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(layoutedEdges);

  // functions
  const onInit = () => {
    setCenter(rootNode?.position.x ?? 0, rootNode?.position.y ?? 0, {
      zoom: 1,
    });
  };

  const handleNodeClick = (event: MouseEvent, currentNode: DrNodeType) => {
    const { edges: updatedEdges, nodes: updatedNodes } = collapseChildNodes(
      currentNode,
      nodes,
      edges,
    );

    setNodes(updatedNodes);
    setEdges(updatedEdges);
  };

  const handleEdgeClick = (_event: MouseEvent, currentEdge: DrEdgeType) => {
    const updatedEdges = edges.map((edge) => {
      edge.animated = edge.id === currentEdge.id;
      return edge;
    });

    setEdges(updatedEdges);
  };

  return (
    <Fragment>
      <ReactFlow
        ref={ref}
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        fitView
        attributionPosition="bottom-right"
        nodeTypes={drReactFlowNodeTypes}
        nodesDraggable
        zoomOnPinch
        zoomOnDoubleClick
        maxZoom={4}
        minZoom={0.1}
        onNodeClick={handleNodeClick}
        nodesConnectable={false}
        onInit={onInit}
        elevateEdgesOnSelect
        onEdgeClick={handleEdgeClick}
      >
        <Background gap={16} />
      </ReactFlow>
    </Fragment>
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
