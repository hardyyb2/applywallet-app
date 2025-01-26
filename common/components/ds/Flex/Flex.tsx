import {
  forwardRef,
  type ComponentType,
  type HTMLAttributes,
  type JSX,
  type PropsWithChildren,
  type ReactNode,
} from "react";

import type { VariantProps } from "cva";

import { flexVariants } from "./flex.utils";

export interface FlexProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof flexVariants> {
  component?: keyof JSX.IntrinsicElements | ComponentType<any>;
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
      ...rest
    },
    ref,
  ) => {
    return (
      <Component
        {...rest}
        ref={ref}
        className={flexVariants({
          direction,
          align,
          justify,
          wrap,
          className,
        })}
      >
        {children}
      </Component>
    );
  },
);

Flex.displayName = "Flex";

export { Flex };
