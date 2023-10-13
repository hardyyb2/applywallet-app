import fs from "fs";

import { DrEdgeType, DrNodeType } from "@/types/flowbuilder";

const scanFolder = ({
  parentFolder,
  parentId,
  nodes,
  edges,
}: {
  parentFolder: string;
  parentId: string;
  nodes: DrNodeType[];
  edges: DrEdgeType[];
}) => {
  const filesAndFolders = fs.readdirSync(parentFolder);

  filesAndFolders.forEach((item) => {
    const itemPath = `${parentFolder}/${item}`;
    const isDirectory = fs.statSync(itemPath).isDirectory();

    const [nodeId, edgeId] = [itemPath, `e:${parentId}->${itemPath}`];

    // we will use "dagre" to position nodes
    const nodePosition = {
      x: 0,
      y: 0,
    };

    nodes.push({
      id: nodeId,
      data: { name: item },
      position: nodePosition,
      type: "custom",
    });

    edges.push({
      id: edgeId,
      source: parentId,
      target: nodeId,
      type: "smoothstep",
    });

    if (isDirectory) {
      // Recursively scan all folders
      scanFolder({
        parentFolder: itemPath,
        parentId: nodeId,
        nodes,
        edges,
      });
    }
  });
};

/** Create "reactflow" nodes and edges for our entire directory */
const generateGraph = (rootFolder: string) => {
  const nodes: DrNodeType[] = [];
  const edges: DrEdgeType[] = [];

  const rootId = rootFolder;

  nodes.push({
    id: rootId,
    data: { name: rootFolder },
    position: { x: 0, y: 0 },
    type: "custom",
  });

  scanFolder({ parentFolder: rootFolder, parentId: rootId, nodes, edges });
  // TODO - test with zod for data
  return { nodes, edges };
};

const graph = generateGraph("app");
const outputFileName = "./app/_bin/folderStructure.ts";
const jsCode = `import { DrEdgeType, DrNodeType } from "@/types/flowbuilder";

export const nodes: DrNodeType[] = ${JSON.stringify(graph.nodes, null, 2)};
export const edges: DrEdgeType[] = ${JSON.stringify(graph.edges, null, 2)};`;

fs.writeFileSync(outputFileName, jsCode);
