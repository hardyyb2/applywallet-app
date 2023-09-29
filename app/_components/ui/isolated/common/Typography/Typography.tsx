import { ComponentType, forwardRef } from "react";

import { fonts } from "@/_lib/fonts";
import { cn } from "@/_utils/styles.utils";

import styles from "./typography.module.scss";
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
      display,
      component,
      className,
      children,
      ...rest
    },
    ref,
  ) => {
    const Component =
      component || TypographyVariantTypeTagMap?.[variant] || "p";
    const bodyVariants: TypographyVariantType[] = ["body1", "body2", "caption"];

    return (
      <Component
        ref={ref}
        className={cn(
          styles[variant],
          bodyVariants.includes(variant)
            ? fonts.secondary.className
            : fonts.primary.className,
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
