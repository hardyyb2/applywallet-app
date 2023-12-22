"use client";

import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementRef,
} from "react";

import * as PopoverPrimitive from "@radix-ui/react-popover";

import { cnM } from "@/utils/styles";

const Popover = PopoverPrimitive.Root;

const PopoverTrigger = PopoverPrimitive.Trigger;

const PopoverPortal = PopoverPrimitive.Portal;

const PopoverArrow = forwardRef<
  ElementRef<typeof PopoverPrimitive.Arrow>,
  ComponentPropsWithoutRef<typeof PopoverPrimitive.Arrow>
>(({ className, ...props }, ref) => (
  <PopoverPrimitive.Arrow
    ref={ref}
    className={cnM("fill-current text-base-content/75", className)}
    {...props}
  />
));

PopoverArrow.displayName = PopoverPrimitive.Arrow.displayName;

const PopoverAnchor = PopoverPrimitive.Anchor;

const PopoverContent = forwardRef<
  ElementRef<typeof PopoverPrimitive.Content>,
  ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(
  (
    {
      className,
      align = "center",
      collisionPadding = 8,
      sideOffset = 4,
      ...props
    },
    ref,
  ) => (
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      collisionPadding={collisionPadding}
      sideOffset={sideOffset}
      className={cnM(
        "z-50 rounded-xl border border-base-content/40 bg-base-100 p-2",
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className,
      )}
      {...props}
    />
  ),
);

PopoverContent.displayName = PopoverPrimitive.Content.displayName;

export {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverPortal,
  PopoverArrow,
  PopoverAnchor,
};
