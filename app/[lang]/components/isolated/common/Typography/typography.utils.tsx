import { TypographyVariantType } from "./typography.types";

export const TypographyVariantTypeTagMap: Record<
  TypographyVariantType,
  keyof JSX.IntrinsicElements
> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "h6",
  subtitle2: "h6",
  body1: "p",
  body2: "p",
  caption: "span",
  srOnly: "span",
};

console.log("[RENDER] components/isolated/common/Typography/typography.utils.tsx");