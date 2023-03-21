"use client";

import { Button, Popover } from "@/components/isolated/wrapped";
import clsx from "clsx";
import { EllipsisVIcon } from "public/images";

const CareerCardActions = () => {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <Button color="ghost" startIcon={<EllipsisVIcon />} className="p-0" />
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          className={clsx(
            "bg-base-200 / p-4 / rounded-lg border-2 border-primary",
          )}
          sideOffset={5}
        >
          <Popover.Arrow className="text-primary" />
          <Button>edit</Button>
          <Button>delete</Button>

          <Popover.Close className="PopoverClose" aria-label="Close">
            close
          </Popover.Close>
          <Popover.Arrow className="PopoverArrow" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

export { CareerCardActions };
