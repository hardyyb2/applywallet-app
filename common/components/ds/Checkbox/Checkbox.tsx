"use client";

import * as React from "react";

import type { VariantProps } from "cva";
import { Checkbox as CheckboxPrimitive } from "radix-ui";

import { cnM } from "@/utils/styles";

import { checkboxVariants } from "./checkbox.utils";

interface CheckboxProps
  extends Omit<
      React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
      "color" | "size"
    >,
    VariantProps<typeof checkboxVariants> {}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, children, color, responsive, size, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cnM(checkboxVariants({ color, size, responsive }), className)}
    {...props}
  >
    {children}
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox, type CheckboxProps };
