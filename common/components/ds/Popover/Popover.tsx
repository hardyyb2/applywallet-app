"use client";

import { type ComponentProps } from "react";

import { cva } from "cva";
import { Popover as PopoverPrimitive } from "radix-ui";

import { cnM } from "@/utils/styles";

const Popover = PopoverPrimitive.Root;

const PopoverTrigger = PopoverPrimitive.Trigger;

const PopoverPortal = PopoverPrimitive.Portal;

const PopoverArrow = ({
  ref,
  className,
  ...props
}: ComponentProps<typeof PopoverPrimitive.Arrow>) => (
  <PopoverPrimitive.Arrow
    ref={ref}
    className={cnM("fill-current text-base-content/75", className)}
    {...props}
  />
);

PopoverArrow.displayName = PopoverPrimitive.Arrow.displayName;

const PopoverAnchor = PopoverPrimitive.Anchor;

const popoverVariants = cva(
  cnM(
    "z-50 rounded-xl border border-base-content/40 bg-base-100 p-2",
    "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
  ),
);

const PopoverContent = ({
  ref,
  className,
  align = "center",
  collisionPadding = 8,
  sideOffset = 4,
  ...props
}: ComponentProps<typeof PopoverPrimitive.Content>) => (
  <PopoverPrimitive.Content
    ref={ref}
    align={align}
    collisionPadding={collisionPadding}
    sideOffset={sideOffset}
    className={cnM(
      popoverVariants({
        className,
      }),
    )}
    {...props}
  />
);

PopoverContent.displayName = PopoverPrimitive.Content.displayName;

export {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverPortal,
  PopoverArrow,
  PopoverAnchor,
  popoverVariants,
};
