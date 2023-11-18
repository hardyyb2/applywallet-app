"use client";

import { Button } from "@/components/isolated/Button";
import { Flex } from "@/components/isolated/Flex";
import { Icons } from "@/components/isolated/Icons";
import {
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverPortal,
  PopoverTrigger,
} from "@/components/isolated/Popover";

const baseActions = ["edit", "delete"] as const;
type BaseCardActionsProps = {
  actions?: typeof baseActions;
  handleAction: (action: (typeof baseActions)[number]) => void;
};

const BaseCardActions = ({
  handleAction,
  actions = ["edit", "delete"],
}: BaseCardActionsProps) => {
  if (!actions.length) {
    return null;
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          color="ghost"
          startIcon={<Icons.MoreVertical />}
          className="p-0"
        />
      </PopoverTrigger>
      <PopoverPortal>
        <PopoverContent
          className="rounded-lg border-2 border-primary bg-base-200 p-2"
          collisionPadding={8}
        >
          <Flex direction="row" className="gap-2">
            {actions.includes("edit") ? (
              <Button
                color="primary"
                responsive
                startIcon={<Icons.Pencil />}
                onClick={() => handleAction("edit")}
              />
            ) : null}
            {actions.includes("delete") ? (
              <Button
                color="error"
                responsive
                startIcon={<Icons.Trash2 />}
                onClick={() => handleAction("delete")}
              />
            ) : null}
          </Flex>

          <PopoverArrow className="fill-primary" />
        </PopoverContent>
      </PopoverPortal>
    </Popover>
  );
};

export { BaseCardActions, type BaseCardActionsProps };
