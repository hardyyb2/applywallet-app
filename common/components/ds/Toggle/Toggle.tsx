"use client";

import * as React from "react";

import { cva, type VariantProps } from "cva";
import { Toggle as TogglePrimitive } from "radix-ui";

import { cnM } from "@/utils/styles";

const toggleVariants = cva(
  cnM(
    "label-m inline-flex items-center justify-center rounded-btn transition-colors",
    "opacity-75 hover:bg-base-200 hover:opacity-100 disabled:pointer-events-none disabled:opacity-50",
    "data-[state=on]:bg-accent data-[state=on]:text-accent-content data-[state=on]:opacity-100",
  ),
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline:
          "border border-base-content data-[state=on]:border-accent-content",
      },
      size: {
        default: "h-10 px-2xs",
        sm: "h-8 px-3xs",
        lg: "h-10 px-2xs",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

type ToggleProps = React.ComponentProps<typeof TogglePrimitive.Root> &
  VariantProps<typeof toggleVariants>;

const Toggle = ({ ref, className, variant, size, ...props }: ToggleProps) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cnM(toggleVariants({ variant, size, className }))}
    {...props}
  />
);

Toggle.displayName = TogglePrimitive.Root.displayName;

export { Toggle, toggleVariants, type ToggleProps };
