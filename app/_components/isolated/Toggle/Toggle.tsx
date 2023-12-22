"use client";

import * as React from "react";

import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cva, type VariantProps } from "cva";

import { cnMerge } from "@/utils/styles";

const toggleVariants = cva(
  cnMerge(
    "inline-flex items-center justify-center rounded-btn label-m transition-colors",
    "opacity-75 hover:opacity-100 hover:bg-base-200  disabled:pointer-events-none disabled:opacity-50 ",
    "data-[state=on]:opacity-100 data-[state=on]:bg-accent data-[state=on]:text-accent-content",
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

type ToggleProps = React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
  VariantProps<typeof toggleVariants>;

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  ToggleProps
>(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cnMerge(toggleVariants({ variant, size, className }))}
    {...props}
  />
));

Toggle.displayName = TogglePrimitive.Root.displayName;

export { Toggle, toggleVariants, type ToggleProps };
