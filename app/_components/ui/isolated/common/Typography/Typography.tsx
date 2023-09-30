import { ComponentType, forwardRef } from "react";

import { type VariantProps } from "cva";

import {
  typographyVariants,
  TypographyVariantTypeTagMap,
} from "./typography.utils";

export interface TypographyProps
  extends VariantProps<typeof typographyVariants> {
  component?: keyof JSX.IntrinsicElements | ComponentType<any>;
  children?: React.ReactNode;
  className?: string;
}

const Typography = forwardRef<
  keyof JSX.IntrinsicElements | ComponentType<any>,
  TypographyProps
>(
  (
    {
      variant = "body1",
      align = "left",
      display,
      component,
      className,
      ...rest
    },
    ref,
  ) => {
    const Component =
      component ?? TypographyVariantTypeTagMap?.[variant ?? "body1"];

    return (
      <Component
        ref={ref}
        className={typographyVariants({
          variant,
          display,
          align,
          className,
        })}
        {...rest}
      />
    );
  },
);

Typography.displayName = "Typography";

export { Typography, typographyVariants };
