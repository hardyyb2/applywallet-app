import { Fragment } from "react";

import { ConditionalMatch } from "@dx-kit/react-conditional-match";
import { Handle, NodeProps, Position } from "reactflow";

import { Flex, Typography } from "@/components/ui/isolated/common";
import {
  Button,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/isolated/wrapped";
import { Icons } from "@/components/ui/isolated/wrapped/Icons";

import { DrNodeDataType } from "@/types/flowbuilder";

import { customNodeIcon } from "./customNode.utils";

// TODO - check why memo is not working properly
const CustomNode = ({ data, isConnectable }: NodeProps<DrNodeDataType>) => {
  const NodeIcon = customNodeIcon[`${data.type}:${data.subType}`];
  const hasNodeIcon = data.type !== "file";

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

        <ConditionalMatch fallback={null}>
          <ConditionalMatch.Render when={hasNodeIcon}>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button color="ghost" size="sm">
                    {data.collapsed ? (
                      <Icons.ChevronDown />
                    ) : (
                      <Icons.ChevronsRight />
                    )}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  {data.collapsed ? "expand children" : "collapse children"}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </ConditionalMatch.Render>
        </ConditionalMatch>
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
