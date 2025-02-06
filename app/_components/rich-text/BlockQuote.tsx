"use client";

import React from "react";

import { PlateElement, type PlateElementProps } from "@udecode/plate-common";

import { cnM } from "@/utils/styles";

const BlockquoteElement = ({
  ref,
  className,
  children,
  ...props
}: PlateElementProps & {
  ref?: React.RefObject<React.ComponentRef<typeof PlateElement>>;
}) => {
  return (
    <PlateElement
      asChild
      ref={ref}
      className={cnM("my-1 border-l-2 pl-6 italic", className)}
      {...props}
    >
      <blockquote>{children}</blockquote>
    </PlateElement>
  );
};
BlockquoteElement.displayName = "BlockquoteElement";

export { BlockquoteElement };
