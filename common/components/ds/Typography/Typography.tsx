import { type ComponentProps, type ReactNode } from "react";

import { cnM } from "@/utils/styles";

type TypographyVariant =
  | "display"
  | "h1"
  | "h2"
  | "h3"
  | "body-large"
  | "body"
  | "body-small"
  | "label"
  | "caption";

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
  display: "h1",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  "body-large": "p",
  body: "p",
  "body-small": "p",
  label: "span",
  caption: "span",
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
