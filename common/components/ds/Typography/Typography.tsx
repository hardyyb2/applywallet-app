import { type ComponentProps, type ReactNode } from "react";

import { cnM } from "@/utils/styles";

type TypographyVariant =
  // Display variants
  | "display-l"
  | "display-m"
  | "display-s"
  // Headline variants
  | "headline-l"
  | "headline-m"
  | "headline-s"
  // Title variants
  | "title-l"
  | "title-m"
  | "title-s"
  // Body variants
  | "body-l"
  | "body-m"
  | "body-s"
  // Label variants
  | "label-l"
  | "label-l-bold"
  | "label-m"
  | "label-m-bold"
  | "label-s"
  | "label-xs"
  // Caption variants
  | "caption-l"
  | "caption-m"
  | "caption-s";

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

interface TypographyProps extends Omit<ComponentProps<"p">, "className"> {
  variant: TypographyVariant;
  as?: TypographyElement;
  children: ReactNode;
  className?: string;
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
  ...props
}: TypographyProps) => {
  const Component = as || defaultElementMap[variant];

  return (
    <Component className={cnM(variant, className)} {...props}>
      {children}
    </Component>
  );
};

Typography.displayName = "Typography";
