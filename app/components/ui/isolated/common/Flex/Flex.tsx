import { ComponentType, forwardRef, PropsWithChildren, ReactNode } from "react";

import clsx from "clsx";

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
  component?: keyof JSX.IntrinsicElements | ComponentType<any>;
  className?: string;
  children?: ReactNode | ReactNode[];
}

const Flex = forwardRef<
  keyof JSX.IntrinsicElements | ComponentType<any>,
  PropsWithChildren<FlexProps>
>(
  (
    {
      direction,
      align = "stretch",
      justify,
      wrap,
      component: Component = "div",
      className = "",
      children = null,
    },
    ref,
  ) => {
    return (
      <Component
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
      </Component>
    );
  },
);

Flex.displayName = "Flex";

export { Flex };
