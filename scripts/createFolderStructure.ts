import fs from "fs";
import path from "path";

import prettier from "prettier";

import type {
  DrEdgeType,
  DrFileType,
  DrFolderType,
  DrNodeType,
} from "@/types/flowbuilder";

const ignoreFolders = [
  "node_modules",
  "src",
  ".contentlayer",
  ".next",
  ".git",
  ".env",
  ".env.local",
  ".env.development",
  ".env.production",
  ".env.test",
  ".env.*", // catch any other .env variants
  "secrets",
  "config",
];

const isPathSafe = (itemPath: string): boolean => {
  // Prevent traversal outside root directory
  const normalizedPath = path.normalize(itemPath);
  if (normalizedPath.includes("..")) {
    return false;
  }

  // Check if path contains any ignored folders
  if (ignoreFolders.some((folder) => normalizedPath.includes(folder))) {
    return false;
  }

  return true;
};

const getNodeSubType = (
  type: DrNodeType["data"]["type"],
  fileOrFolderName: string,
) => {
  if (type === "file") {
    const fileRegex = new RegExp(/(?:^|\.)?(page|layout|utils|types)(?:\.|$)/);
    let subType: DrFileType["subType"] = "page";

    if (fileRegex.test(fileOrFolderName)) {
      subType = "page";
    }

    return { type, subType } as DrFileType;
  }

  return { type: "folder", subType: "route-group" } as DrFolderType;
};

const scanFolder = ({
  parentFolder,
  parentId,
  nodes,
  edges,
  rootDir,
}: {
  parentFolder: string;
  parentId: string;
  nodes: DrNodeType[];
  edges: DrEdgeType[];
  rootDir: string;
}) => {
  if (!isPathSafe(parentFolder)) {
    return;
  }

  try {
    const filesAndFolders = fs.readdirSync(parentFolder);

    filesAndFolders.forEach((item) => {
      const itemPath = path.join(parentFolder, item);

      // Convert absolute paths to relative paths for output
      const relativePath = path.relative(rootDir, itemPath);
      const nodeId = relativePath;

      if (!isPathSafe(itemPath)) {
        return;
      }

      const isDirectory = fs.statSync(itemPath).isDirectory();
      if (isDirectory && item.startsWith("_")) {
        return;
      }

      const edgeId = `e:${parentId}->${nodeId}`;
      const nodePosition = { x: 0, y: 0 };

      const fileOrFolderType = isDirectory ? "folder" : "file";
      nodes.push({
        id: nodeId,
        data: {
          name: item,
          ...getNodeSubType(fileOrFolderType, item),
        },
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
        scanFolder({
          parentFolder: itemPath,
          parentId: nodeId,
          nodes,
          edges,
          rootDir,
        });
      }
    });
  } catch (error) {
    console.error(`Error scanning folder ${parentFolder}:`, error);
  }
};

/** Create "reactflow" nodes and edges for our entire directory */
const generateGraph = async (rootFolder: string) => {
  if (!isPathSafe(rootFolder)) {
    throw new Error("Invalid root folder path");
  }

  const absoluteRootPath = path.resolve(rootFolder);
  const nodes: DrNodeType[] = [];
  const edges: DrEdgeType[] = [];

  const rootId = rootFolder;

  nodes.push({
    id: rootId,
    data: { name: rootFolder, root: true, type: "folder", subType: "root" },
    position: { x: 0, y: 0 },
    type: "custom",
  });

  scanFolder({
    parentFolder: absoluteRootPath,
    parentId: rootId,
    nodes,
    edges,
    rootDir: absoluteRootPath,
  });

  return { nodes, edges };
};

(async () => {
  try {
    const graph = await generateGraph(".");
    const outputFileName = "./app/_bin/folderStructure.ts";

    const unformattedCode = `import type { DrEdgeType, DrNodeType } from "@/types/flowbuilder";

export const nodes: DrNodeType[] = ${JSON.stringify(graph.nodes, null, 2)};
export const edges: DrEdgeType[] = ${JSON.stringify(graph.edges, null, 2)};`;

    const formattedCode = await prettier.format(unformattedCode, {
      parser: "typescript",
      semi: true,
      singleQuote: false,
    });

    fs.writeFileSync(outputFileName, formattedCode);
  } catch (error) {
    console.error("Failed to generate folder structure:", error);
    process.exit(1);
  }
})();
