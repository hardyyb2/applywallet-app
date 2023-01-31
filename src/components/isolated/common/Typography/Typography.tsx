import clsx from "clsx";
import { ComponentType, forwardRef } from "react";

import {
  TypographyDisplayType,
  TypographyVariantType,
} from "./typography.types";
import { TypographyVariantTypeTagMap } from "./typography.utils";

type TypographyCustomProps = {
  variant?: TypographyVariantType;
  display?: TypographyDisplayType;
  component?: keyof JSX.IntrinsicElements | ComponentType<any>;
  children?: React.ReactNode;
  align?: "left" | "center" | "right";
  className?: string;
};

type ElementProps = JSX.IntrinsicElements[keyof JSX.IntrinsicElements];

export type TypographyProps = TypographyCustomProps & ElementProps;

const typographyVariantStyles: Record<TypographyVariantType, string> = {
  h1: "text-6xl leading-[1.167] tracking-[-0.01562em] font-light",
  h2: "text-5xl leading-[1.2] tracking-[-0.00833em] font-light",
  h3: "text-4xl leading-[1.167] tracking-none font-light",
  h4: "text-3xl leading-[1.235] tracking-[0.00735em] font-light",
  h5: "text-2xl leading-[1.5] tracking-none font-light",
  h6: "text-xl leading-[1.6] tracking-[0.00125em] font-light",
  subtitle1: "text-lg leading-[1.75] tracking-[0em] font-light",
  subtitle2: "text-base leading-[1.875] tracking-[0.00714em] font-light",
  body1: "text-sm leading-[1.5] tracking-[0.00625em] font-light",
  body2: "text-xs leading-[1.43] tracking-[0.0125em] font-light",
  button: "text-sm font-medium uppercase tracking-wide",
  caption: "text-sm leading-[1.375] tracking-[0.00937em] font-light",
  overline: "text-xs uppercase tracking-wide",
  srOnly: "sr-only",
};

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
          typographyVariantStyles[variant],
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
