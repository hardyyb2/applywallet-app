"use client";

import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

import * as PopoverPrimitive from "@radix-ui/react-popover";

import { cnMerge } from "@/utils/styles.utils";

const Popover = PopoverPrimitive.Root;

const PopoverTrigger = PopoverPrimitive.Trigger;

const PopoverPortal = PopoverPrimitive.Portal;

const PopoverArrow = PopoverPrimitive.Arrow;

const PopoverContent = forwardRef<
  ElementRef<typeof PopoverPrimitive.Content>,
  ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = "center", ...props }, ref) => (
  <PopoverPrimitive.Content
    ref={ref}
    align={align}
    className={cnMerge(className)}
    {...props}
  />
));

PopoverContent.displayName = PopoverPrimitive.Content.displayName;

export { Popover, PopoverTrigger, PopoverContent, PopoverPortal, PopoverArrow };
