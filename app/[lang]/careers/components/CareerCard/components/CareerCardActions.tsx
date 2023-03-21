"use client";

import clsx from "clsx";

import { Button, Popover } from "@/components/isolated/wrapped";
import { BinIcon, EllipsisVIcon, PenIcon } from "public/images";
import { Flex } from "@/components/isolated/common";

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
          collisionPadding={8}
        >
          <Flex direction="row" className="gap-2">
            <Button color="primary" responsive startIcon={<PenIcon />} />
            <Button color="error" responsive startIcon={<BinIcon />} />
          </Flex>

          <Popover.Arrow className="fill-primary" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

export { CareerCardActions };
