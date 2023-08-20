"use client";

import { Flex } from "app/components/ui/isolated/common";
import { Button, Popover } from "app/components/ui/isolated/wrapped";

import { Icons } from "@/components/ui/isolated/wrapped/Icons";

const CareerCardActions = () => {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <Button
          color="ghost"
          startIcon={<Icons.MoreVertical />}
          className="p-0"
        />
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          className="rounded-lg border-2 border-primary bg-base-200 p-2"
          collisionPadding={8}
        >
          <Flex direction="row" className="gap-2">
            <Button color="primary" responsive startIcon={<Icons.Pencil />} />
            <Button color="error" responsive startIcon={<Icons.Trash2 />} />
          </Flex>

          <Popover.Arrow className="fill-primary" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

export { CareerCardActions };
