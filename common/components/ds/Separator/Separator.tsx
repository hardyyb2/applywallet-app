"use client";

import * as React from "react";

import { Separator as SeparatorPrimitive } from "radix-ui";

import { cnM } from "@/utils/styles";

interface SeparatorProps
  extends React.ComponentProps<typeof SeparatorPrimitive.Root> {}

const Separator = ({
  ref,
  className,
  orientation = "vertical",
  decorative = true,
  ...props
}: SeparatorProps) => (
  <SeparatorPrimitive.Root
    ref={ref}
    decorative={decorative}
    orientation={orientation}
    className={cnM(
      "d-divider shrink-0",
      orientation === "horizontal" && "d-divider-horizontal",
      className,
    )}
    {...props}
  />
);
Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator, type SeparatorProps };
