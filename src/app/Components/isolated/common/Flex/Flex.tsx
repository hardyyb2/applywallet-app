import clsx from "clsx";
import { forwardRef, PropsWithChildren } from "react";

import {
  FlexAlignType,
  FlexDirectionType,
  FlexJustifyType,
  FlexWrapType,
} from "./flex.types";

export interface FlexProps {
  direction?: FlexDirectionType;
  align?: FlexAlignType;
  justify?: FlexJustifyType;
  wrap?: FlexWrapType;
  className?: string;
}

const Flex = forwardRef<HTMLDivElement, PropsWithChildren<FlexProps>>(
  (
    {
      direction,
      align = "stretch",
      justify,
      wrap,
      className = "",
      children = null,
    },
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
            "flex-col-reverse": direction === "column-reverse",
          },
          {
            "items-stretch": align === "stretch",
            "items-start": align === "flex-start",
            "items-end": align === "flex-end",
            "items-center": align === "center",
          },
          {
            "justify-start": justify === "flex-start",
            "justify-end": justify === "flex-end",
            "justify-center": justify === "center",
            "justify-between": justify === "space-between",
            "justify-around": justify === "space-around",
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
