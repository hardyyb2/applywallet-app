import React from "react";

import { PlateLeaf, type PlateLeafProps } from "@udecode/plate-common";

import { cnM } from "@/utils/styles";

export function HighlightLeaf({
  className,
  children,
  ...props
}: PlateLeafProps) {
  return (
    <PlateLeaf
      asChild
      className={cnM(
        "bg-secondary/20 text-inherit dark:bg-secondary/40",
        className,
      )}
      {...props}
    >
      <mark>{children}</mark>
    </PlateLeaf>
  );
}
