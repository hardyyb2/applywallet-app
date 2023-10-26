import { Fragment } from "react";

import { Handle, Position, type NodeProps } from "reactflow";

import { Flex, Typography } from "@/components/isolated";

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
        <Typography variant="body2" className="!font-bold text-base-content">
          {data.name}
        </Typography>
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
