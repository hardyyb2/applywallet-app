"use client";

import * as React from "react";

import * as SeparatorPrimitive from "@radix-ui/react-separator";

import { cnM } from "@/utils/styles";

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(
  (
    { className, orientation = "horizontal", decorative = true, ...props },
    ref,
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cnM(
        "dui-divider shrink-0",
        orientation === "horizontal"
          ? "dui-divider-horizontal"
          : "dui-divider-vertical",
        className,
      )}
      {...props}
    />
  ),
);
Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };
