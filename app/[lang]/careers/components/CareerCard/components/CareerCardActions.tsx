"use client";

import clsx from "clsx";

import { Flex } from "app/components/ui/isolated/common";
import { Button, Popover } from "app/components/ui/isolated/wrapped";
import { BinIcon, EllipsisVIcon, PenIcon } from "public/images/icons";

const CareerCardActions = () => {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <Button color="ghost" startIcon={<EllipsisVIcon />} className="p-0" />
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          className={clsx(
            "bg-base-200 / p-2 / rounded-lg border-2 border-primary",
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
