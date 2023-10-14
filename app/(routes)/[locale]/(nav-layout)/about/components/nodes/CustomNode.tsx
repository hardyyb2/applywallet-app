import { Fragment, memo } from "react";

import { Handle, NodeProps, Position } from "reactflow";

import { Flex, Typography } from "@/components/ui/isolated/common";

import { DrNodeDataType } from "@/types/flowbuilder";

import { customNodeIcon } from "./customNode.utils";

const CustomNode = memo(
  ({ data, isConnectable }: NodeProps<DrNodeDataType>) => {
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
  },
);

CustomNode.displayName = "CustomNode";

export { CustomNode };
