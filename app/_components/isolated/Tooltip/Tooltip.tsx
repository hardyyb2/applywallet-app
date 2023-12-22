"use client";

import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementRef,
} from "react";

import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { type VariantProps } from "cva";

import { cnM } from "@/utils/styles";

import { tooltipArrowVariants, tooltipContentVariants } from "./tooltip.utils";

const TooltipProvider = TooltipPrimitive.Provider;

const Tooltip = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipPortal = TooltipPrimitive.Portal;

export interface TooltipArrowProps
  extends Omit<
      ComponentPropsWithoutRef<typeof TooltipPrimitive.Arrow>,
      "color"
    >,
    VariantProps<typeof tooltipArrowVariants> {}

const TooltipArrow = forwardRef<
  ElementRef<typeof TooltipPrimitive.Arrow>,
  TooltipArrowProps
>(({ className, color, ...props }, ref) => (
  <TooltipPrimitive.Arrow
    ref={ref}
    className={cnM(
      tooltipArrowVariants({
        color,
        className,
      }),
    )}
    {...props}
  />
));

TooltipArrow.displayName = TooltipPrimitive.Arrow.displayName;

export interface TooltipContentProps
  extends Omit<
      ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>,
      "color"
    >,
    VariantProps<typeof tooltipContentVariants> {}

const TooltipContent = forwardRef<
  ElementRef<typeof TooltipPrimitive.Content>,
  TooltipContentProps
>(
  (
    { className, color, sideOffset = 4, collisionPadding = 8, ...props },
    ref,
  ) => (
    <TooltipPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      collisionPadding={collisionPadding}
      className={cnM(
        tooltipContentVariants({
          color,
          className,
        }),
      )}
      {...props}
    />
  ),
);
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
  TooltipArrow,
  TooltipPortal,
};
