import { Fragment, memo } from "react";

import { Handle, Position } from "reactflow";

import { Flex, Typography } from "@/components/ui/isolated/common";

const CustomNode = memo(({ data, isConnectable }: any) => {
  return (
    <Fragment>
      <Handle
        type="target"
        position={Position.Top}
        isConnectable={isConnectable}
      />
      <Flex className=" rounded-xl bg-primary px-m py-xs">
        <Typography variant="body2" className="!font-bold text-base-100">
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
});

CustomNode.displayName = "CustomNode";

export { CustomNode };
