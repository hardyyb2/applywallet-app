import {
  forwardRef,
  type ComponentType,
  type HTMLAttributes,
  type PropsWithChildren,
  type ReactNode,
} from "react";

import { cn } from "@/utils/styles";

import type {
  FlexAlignType,
  FlexDirectionType,
  FlexJustifyType,
  FlexScreensType,
  FlexWrapType,
} from "./flex.types";

export interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  direction?: FlexDirectionType;
  align?: FlexAlignType;
  justify?: FlexJustifyType;
  wrap?: FlexWrapType;
  component?: keyof JSX.IntrinsicElements | ComponentType<any>;
  className?: string;
  children?: ReactNode | ReactNode[];
  switchDirection?: FlexScreensType | false;
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
      switchDirection = false,
    },
    ref,
  ) => {
    return (
      <Component
        ref={ref}
        className={cn(
          "flex",
          {
            "flex-row": direction === "row",
            "flex-row-reverse": direction === "row-reverse",
            "flex-col": direction === "column",
            "flex-col-reverse": direction === "column-reverse",
          },
          {
            // shouldn't have made this component :(
            "sm:flex-col": direction === "row" && switchDirection === "sm",
            "sm:flex-row": direction === "column" && switchDirection === "sm",
            "md:flex-col": direction === "row" && switchDirection === "md",
            "md:flex-row": direction === "column" && switchDirection === "md",
            "lg:flex-col": direction === "row" && switchDirection === "lg",
            "lg:flex-row": direction === "column" && switchDirection === "lg",
            "xl:flex-col": direction === "row" && switchDirection === "xl",
            "xl:flex-row": direction === "column" && switchDirection === "xl",
            "2xl:flex-col": direction === "row" && switchDirection === "2xl",
            "2xl:flex-row": direction === "column" && switchDirection === "2xl",
            "3xl:flex-col": direction === "row" && switchDirection === "3xl",
            "3xl:flex-row": direction === "column" && switchDirection === "3xl",
            "4xl:flex-col": direction === "row" && switchDirection === "4xl",
            "4xl:flex-row": direction === "column" && switchDirection === "4xl",
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
