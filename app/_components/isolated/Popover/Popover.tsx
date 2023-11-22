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

const PopoverArrow = PopoverPrimitive.Arrow;

const PopoverAnchor = PopoverPrimitive.Anchor;

const PopoverContent = forwardRef<
  ElementRef<typeof PopoverPrimitive.Content>,
  ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = "center", ...props }, ref) => (
  <PopoverPrimitive.Content
    ref={ref}
    align={align}
    className={cnMerge("z-50 rounded-xl bg-base-100 p-2 shadow", className)}
    {...props}
  />
));

PopoverContent.displayName = PopoverPrimitive.Content.displayName;

export {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverPortal,
  PopoverArrow,
  PopoverAnchor,
};
