import { Fragment } from "react";

import { Handle, Position, type NodeProps } from "reactflow";

import { Flex } from "~/components/ds/Flex";
import { Typography } from "~/components/ds/Typography";

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
        className="glass bg-base-100 px-m py-xs outline-primary gap-4 rounded-xl outline outline-2"
      >
        <NodeIcon />
        <Typography variant="body-m" className="text-base-content font-bold!">
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
