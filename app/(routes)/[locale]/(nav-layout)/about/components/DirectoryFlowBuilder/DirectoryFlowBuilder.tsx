"use client";

import {
  Background,
  Edge,
  getConnectedEdges,
  getOutgoers,
  Node,
  NodeMouseHandler,
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

import { useState } from "react";

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
  const [hidden, setHidden] = useState(true);

  const hideNodes =
    (hidden: boolean, childEdgesID: string[], childNodesID: string[]) =>
    (node: Node) => {
      if (childNodesID.includes(node.id)) {
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

  const checkTarget = (edges: Edge[], id: string) => {
    let egs = edges.filter((ed) => {
      return ed.target !== id;
    });
    return egs;
  };

  const handleNodeClick: NodeMouseHandler = (_event, node) => {
    let outgoers: Node[] = [];
    let connectedEdges: Edge[] = [];
    let stack: Node[] = [];

    let currentNodeID = node.id;

    stack.push(node);
    while (stack.length > 0) {
      let lastNode = stack.pop();

      if (lastNode) {
        let childnode = getOutgoers(lastNode, nodes, edges);
        let childedge = checkTarget(
          getConnectedEdges([lastNode], edges),
          currentNodeID,
        );
        childnode.map((goer) => {
          stack.push(goer);
          outgoers.push(goer);
        });
        childedge.map((edge) => {
          connectedEdges.push(edge);
        });
      }
    }

    let childNodeID = outgoers.map((node) => {
      return node.id;
    });
    let childEdgeID = connectedEdges.map((edge) => {
      return edge.id;
    });

    setNodes((nodes) => nodes.map(hideNodes(hidden, childEdgeID, childNodeID)));
    setEdges((edges) => edges.map(hideEdges(hidden, childEdgeID, childNodeID)));
    setHidden(!hidden);
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
