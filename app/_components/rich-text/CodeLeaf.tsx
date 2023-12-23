"use client";

import React from "react";

import { PlateLeaf, type PlateLeafProps } from "@udecode/plate-common";

import { cnM } from "@/utils/styles";

export function CodeLeaf({ className, children, ...props }: PlateLeafProps) {
  return (
    <PlateLeaf
      asChild
      className={cnM(
        "whitespace-pre-wrap",
        // TODO - change color for code
        "rounded-md p-3xs",
        className,
      )}
      {...props}
    >
      <code>{children}</code>
    </PlateLeaf>
  );
}
