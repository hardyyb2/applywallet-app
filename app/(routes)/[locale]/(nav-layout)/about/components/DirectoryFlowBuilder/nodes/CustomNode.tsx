import { Fragment } from "react";

import { Handle, NodeProps, Position } from "reactflow";

import { Flex, Typography } from "@/components/ui/isolated/common";
import { Button, PopoverTrigger } from "@/components/ui/isolated/wrapped";
import { Icons } from "@/components/ui/isolated/wrapped/Icons";
import { DataAttrs } from "@/utils/dom.utils";

import { DrNodeDataType } from "@/types/flowbuilder";

import { customNodeIcon, DRT_POPOVER_TRIGGER } from "./customNode.utils";

// TODO - check why memo is not working properly
const CustomNode = ({
  data,
  isConnectable,
  selected,
}: NodeProps<DrNodeDataType>) => {
  const NodeIcon = customNodeIcon[`${data.type}:${data.subType}`];

  const infoButton = (
    <Button
      color="ghost"
      size="sm"
      shape="circle"
      {...{ [DataAttrs.DRT_TRIGGER]: DRT_POPOVER_TRIGGER }}
    >
      <Icons.Info />
    </Button>
  );

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
        {selected ? (
          <PopoverTrigger asChild>{infoButton}</PopoverTrigger>
        ) : (
          infoButton
        )}
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
