import clsx from "clsx";
import { forwardRef, PropsWithChildren } from "react";

import { FlexAlignType, FlexDirectionType, FlexJustifyType, FlexWrapType } from "./flex.types";

export interface FlexProps {
  direction?: FlexDirectionType;
  align?: FlexAlignType;
  justify?: FlexJustifyType;
  wrap?: FlexWrapType;
  className?: string;
}

const Flex = forwardRef<HTMLDivElement, PropsWithChildren<FlexProps>>(
  (
    { direction = "row", align = "stretch", justify = "flex-start", wrap = "nowrap", className = "", children = null },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={clsx(
          "flex",
          {
            "flex-row": direction === "row",
            "flex-row-reverse": direction === "row-reverse",
            "flex-col": direction === "column",
            "flex-col-reverse flex": direction === "column-reverse",
          },
          {
            "items-stretch": align === "stretch",
            "items-flex-start": align === "flex-start",
            "items-flex-end": align === "flex-end",
            "items-center": align === "center",
          },
          {
            "justify-flex-start": justify === "flex-start",
            "justify-flex-end": justify === "flex-end",
            "justify-center": justify === "center",
            "justify-space-between": justify === "space-between",
            "justify-space-around": justify === "space-around",
          },
          {
            "flex-wrap": wrap === "wrap",
            "flex-nowrap": wrap === "nowrap",
            "flex-wrap-reverse": wrap === "wrap-reverse",
          },
          className,
        )}
      >
        {children}
      </div>
    );
  },
);

Flex.displayName = "Flex";

export { Flex };
