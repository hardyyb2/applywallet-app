import fs from "fs";

import { Edge, Node, XYPosition } from "reactflow";

type NodeDataType = {
  name: string;
};
type EdgeDataType = {};

function scanFolder(
  rootFolder: string,
  parentId: string,
  nodes: Node<NodeDataType>[],
  edges: Edge<EdgeDataType>[],
  parentPosition: XYPosition,
) {
  const filesAndFolders = fs.readdirSync(rootFolder);

  filesAndFolders.forEach((item) => {
    const itemPath = `${rootFolder}/${item}`;
    const isDirectory = fs.statSync(itemPath).isDirectory();

    const [nodeId, edgeId] = [itemPath, `e:${parentId}-${itemPath}`];
    const nodePosition = {
      x: parentPosition.x + 100,
      y: parentPosition.y + 100,
    };

    if (isDirectory) {
      nodes.push({
        id: nodeId,
        data: { name: item },
        position: nodePosition,
        type: "custom",
      });
      edges.push({ id: edgeId, source: parentId, target: nodeId });
      scanFolder(itemPath, nodeId, nodes, edges, nodePosition);
    } else {
      nodes.push({
        id: nodeId,
        data: { name: item },
        position: nodePosition,
        type: "custom",
      });
      edges.push({ id: edgeId, source: parentId, target: nodeId });
    }
  });
}

function generateGraph(rootFolder: string) {
  const nodes: Node<NodeDataType>[] = [];
  const edges: Edge<EdgeDataType>[] = [];
  const rootId = rootFolder;

  nodes.push({
    id: rootId,
    data: { name: rootFolder },
    position: { x: 0, y: 0 },
    type: "custom",
  });
  scanFolder(rootFolder, rootId, nodes, edges, { x: 0, y: 0 });

  return { nodes, edges };
}

const graph = generateGraph("app");

const outputFileName = "./app/_bin/folder_structure.json";
fs.writeFileSync(outputFileName, JSON.stringify(graph, null, 2));
