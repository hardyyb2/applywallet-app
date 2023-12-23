import React from "react";

import { PlateElement, type PlateElementProps } from "@udecode/plate-common";

import { cnM } from "@/utils/styles";

const ParagraphElement = React.forwardRef<
  React.ElementRef<typeof PlateElement>,
  PlateElementProps
>(({ className, children, ...props }: PlateElementProps, ref) => {
  return (
    <PlateElement
      ref={ref}
      className={cnM("m-0 px-0 py-1", className)}
      {...props}
    >
      {children}
    </PlateElement>
  );
});
ParagraphElement.displayName = "ParagraphElement";

export { ParagraphElement };
