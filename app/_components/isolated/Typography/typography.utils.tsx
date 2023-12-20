import { cva, type VariantProps } from "cva";

export const TypographyVariantTypeTagMap: Record<
  Exclude<TypographyVariantType, null | undefined>,
  keyof JSX.IntrinsicElements
> = {
  "display-l": "h1",
  "display-m": "h2",
  "display-s": "h3",
  "headline-l": "h4",
  "headline-m": "h5",
  "headline-s": "h6",
  "title-l": "h4",
  "title-m": "h5",
  "title-s": "h6",
  "body-l": "p",
  "body-m": "p",
  "body-s": "p",
  "label-l": "span",
  "label-m": "span",
  "label-s": "span",
  srOnly: "span",
};

type TypographyVariantType = VariantProps<typeof typographyVariants>["variant"];

export const typographyVariants = cva("", {
  variants: {
    variant: {
      "display-l": "display-l font-primary",
      "display-m": "display-m font-primary",
      "display-s": "display-s font-primary",
      "headline-l": "headline-l font-primary",
      "headline-m": "headline-m font-primary",
      "headline-s": "headline-s font-primary",
      "title-l": "title-l font-secondary",
      "title-m": "title-m font-secondary",
      "title-s": "title-s font-secondary",
      "body-l": "body-l font-secondary",
      "body-m": "body-m font-secondary",
      "body-s": "body-s font-secondary",
      "label-l": "label-l font-secondary",
      "label-m": "label-m font-secondary",
      "label-s": "label-s font-secondary",
      srOnly: "sr-only",
    },
    display: {
      inline: "inline",
      block: "block",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
  },
  defaultVariants: {
    variant: "body-l",
    align: "left",
  },
});
