import { ComponentType, forwardRef, ReactNode } from "react";

import { cn } from "@/_utils/styles.utils";
import { type VariantProps } from "cva";

import {
  typographyVariants,
  TypographyVariantTypeTagMap,
} from "./typography.utils";

export interface TypographyProps
  extends VariantProps<typeof typographyVariants> {
  component?: keyof JSX.IntrinsicElements | ComponentType<any>;
  children?: ReactNode;
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
        className={cn(
          typographyVariants({
            variant,
            display,
            align,
            className,
          }),
        )}
        {...rest}
      />
    );
  },
);

Typography.displayName = "Typography";

export { Typography, typographyVariants };
