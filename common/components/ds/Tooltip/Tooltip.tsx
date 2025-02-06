"use client";

import { type ComponentProps } from "react";

import { type VariantProps } from "cva";
import { Tooltip as TooltipPrimitive } from "radix-ui";

import { cnM } from "@/utils/styles";

import { tooltipArrowVariants, tooltipContentVariants } from "./tooltip.utils";

const TooltipProvider = TooltipPrimitive.Provider;

const Tooltip = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipPortal = TooltipPrimitive.Portal;

export interface TooltipArrowProps
  extends Omit<ComponentProps<typeof TooltipPrimitive.Arrow>, "color">,
    VariantProps<typeof tooltipArrowVariants> {}

const TooltipArrow = ({
  ref,
  className,
  color,
  ...props
}: TooltipArrowProps) => (
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
);

TooltipArrow.displayName = TooltipPrimitive.Arrow.displayName;

export interface TooltipContentProps
  extends Omit<ComponentProps<typeof TooltipPrimitive.Content>, "color">,
    VariantProps<typeof tooltipContentVariants> {}

const TooltipContent = ({
  ref,
  className,
  color,
  sideOffset = 4,
  collisionPadding = 8,
  ...props
}: TooltipContentProps) => (
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
