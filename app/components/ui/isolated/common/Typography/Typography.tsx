import { ComponentType, forwardRef } from "react";

import clsx from "clsx";

import {
  TypographyDisplayType,
  TypographyVariantType,
} from "./typography.types";
import { TypographyVariantTypeTagMap } from "./typography.utils";

export interface TypographyProps {
  variant?: TypographyVariantType;
  display?: TypographyDisplayType;
  component?: keyof JSX.IntrinsicElements | ComponentType<any>;
  children?: React.ReactNode;
  align?: "left" | "center" | "right";
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
      display = "block",
      component,
      className,
      children,
      ...rest
    },
    ref,
  ) => {
    const Component =
      component || TypographyVariantTypeTagMap?.[variant] || "p";

    return (
      <Component
        ref={ref}
        className={clsx(
          {
            "text-6xl font-bold leading-tight": variant === "h1",
            "text-5xl font-bold leading-tight": variant === "h2",
            "text-4xl font-bold leading-tight": variant === "h3",
            "text-3xl font-bold leading-tight": variant === "h4",
            "text-2xl font-bold leading-tight": variant === "h5",
            "text-xl font-medium leading-tight": variant === "h6",
            "text-lg font-medium leading-snug": variant === "subtitle1",
            "text-base font-medium leading-snug": variant === "subtitle2",
            "text-base leading-relaxed": variant === "body1",
            "text-sm font-medium leading-relaxed": variant === "body2",
            "text-sm font-medium leading-tight": variant === "caption",
            "sr-only": variant === "srOnly",
          },
          {
            inline: display === "inline",
            block: display === "block",
          },
          {
            "text-left": align === "left",
            "text-center": align === "center",
            "text-right": align === "right",
          },
          className,
        )}
        {...rest}
      >
        {children}
      </Component>
    );
  },
);

Typography.displayName = "Typography";

export { Typography };
