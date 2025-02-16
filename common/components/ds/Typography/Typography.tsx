import { type ComponentProps, type ReactNode } from "react";

import type { VariantProps } from "cva";

import { typographyVariants } from "./typography.utils";

type TypographyElement =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "span"
  | "div";

type TypographyVariant = Exclude<
  VariantProps<typeof typographyVariants>["variant"],
  undefined | null
>;

export interface TypographyProps
  extends ComponentProps<"p">,
    VariantProps<typeof typographyVariants> {
  as?: TypographyElement;
  children: ReactNode;
}

const defaultElementMap: Record<TypographyVariant, TypographyElement> = {
  // Display
  "display-l": "h1",
  "display-m": "h1",
  "display-s": "h1",
  // Headline
  "headline-l": "h2",
  "headline-m": "h2",
  "headline-s": "h2",
  // Title
  "title-l": "h3",
  "title-m": "h3",
  "title-s": "h3",
  // Body
  "body-l": "p",
  "body-m": "p",
  "body-s": "p",
  // Label
  "label-l": "span",
  "label-l-bold": "span",
  "label-m": "span",
  "label-m-bold": "span",
  "label-s": "span",
  "label-xs": "span",
  // Caption
  "caption-l": "span",
  "caption-m": "span",
  "caption-s": "span",
};

export const Typography = ({
  variant,
  as,
  children,
  className,
  align,
  xs,
  sm,
  md,
  lg,
  ...props
}: TypographyProps) => {
  const Component = as || defaultElementMap[variant ?? "body-m"];

  return (
    <Component
      className={typographyVariants({
        variant,
        align,
        xs,
        sm,
        md,
        lg,
        className,
      })}
      {...props}
    >
      {children}
    </Component>
  );
};

Typography.displayName = "Typography";
