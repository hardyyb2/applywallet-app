import { forwardRef, type ComponentType, type ReactNode } from "react";

import { type VariantProps } from "cva";

import { cnM } from "@/utils/styles";

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

/** @deprecated use tailwind classes instead */
const Typography = forwardRef<
  keyof JSX.IntrinsicElements | ComponentType<any>,
  TypographyProps
>(
  (
    { variant, align = "left", display, component, className, ...rest },
    ref,
  ) => {
    const Component =
      component ?? TypographyVariantTypeTagMap?.[variant ?? "body-l"];

    return (
      <Component
        ref={ref}
        className={cnM(
          typographyVariants({
            variant,
            display,
            align,
            sm: rest.sm,
            lg: rest.lg,
            xl: rest.xl,
            "2xl": rest["2xl"],
            "3xl": rest["3xl"],
            "4xl": rest["4xl"],
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
