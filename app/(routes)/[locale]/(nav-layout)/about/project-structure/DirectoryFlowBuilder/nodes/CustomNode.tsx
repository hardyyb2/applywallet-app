import { Fragment } from "react";

import { Handle, Position, type NodeProps } from "reactflow";

import { Flex } from "~/components/isolated/Flex";

import { type DrNodeDataType } from "@/types/flowbuilder";

import { customNodeIcon } from "./customNode.utils";

// TODO - check why memo is not working properly
const CustomNode = ({ data, isConnectable }: NodeProps<DrNodeDataType>) => {
  const NodeIcon = customNodeIcon[`${data.type}:${data.subType}`];

  return (
    <Fragment>
      <Handle
        type="target"
        position={Position.Top}
        isConnectable={isConnectable}
      />
      <Flex
        align="center"
        className="glass gap-4 rounded-xl bg-base-100 px-m py-xs outline outline-2 outline-primary"
      >
        <NodeIcon />
        <p className="body-m !font-bold text-base-content">{data.name}</p>
      </Flex>

      <Handle
        type="source"
        position={Position.Bottom}
        isConnectable={isConnectable}
      />
    </Fragment>
  );
};

CustomNode.displayName = "CustomNode";

export { CustomNode };
