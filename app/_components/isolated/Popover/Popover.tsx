"use client";

import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementRef,
} from "react";

import * as PopoverPrimitive from "@radix-ui/react-popover";

import { cnMerge } from "@/utils/styles";

const Popover = PopoverPrimitive.Root;

const PopoverTrigger = PopoverPrimitive.Trigger;

const PopoverPortal = PopoverPrimitive.Portal;

const PopoverArrow = forwardRef<
  ElementRef<typeof PopoverPrimitive.Arrow>,
  ComponentPropsWithoutRef<typeof PopoverPrimitive.Arrow>
>(({ className, ...props }, ref) => (
  <PopoverPrimitive.Arrow
    ref={ref}
    className={cnMerge("fill-current text-base-content/75", className)}
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
      className={cnMerge(
        "z-50 rounded-xl border border-base-content/40 bg-base-100 p-2 shadow",
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
