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
  "label-l-bold": "span",
  "label-m": "span",
  "label-m-bold": "span",
  "label-s": "span",
  "sr-only": "span",
};

type TypographyVariantType = VariantProps<typeof typographyVariants>["variant"];

export const typographyVariants = cva("", {
  variants: {
    variant: {
      "display-l": "display-l",
      "display-m": "display-m",
      "display-s": "display-s",
      "headline-l": "headline-l",
      "headline-m": "headline-m",
      "headline-s": "headline-s",
      "title-l": "title-l",
      "title-m": "title-m",
      "title-s": "title-s",
      "body-l": "body-l",
      "body-m": "body-m",
      "body-s": "body-s",
      "label-l": "label-l",
      "label-l-bold": "label-l-bold",
      "label-m": "label-m",
      "label-m-bold": "label-m-bold",
      "label-s": "label-s",
      "sr-only": "sr-only",
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
    variant: "body-m",
    align: "left",
  },
});
