"use client";

import * as React from "react";

import { Separator as SeparatorPrimitive } from "radix-ui";

import { cnM } from "@/utils/styles";

interface SeparatorProps
  extends React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root> {}

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  SeparatorProps
>(
  (
    { className, orientation = "vertical", decorative = true, ...props },
    ref,
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cnM(
        "dui-divider shrink-0",
        orientation === "horizontal" && "dui-divider-horizontal",
        className,
      )}
      {...props}
    />
  ),
);
Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator, type SeparatorProps };
