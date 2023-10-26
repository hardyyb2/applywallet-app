import { cva, type VariantProps } from "cva";

export const TypographyVariantTypeTagMap: Record<
  Exclude<TypographyVariantType, null | undefined>,
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

type TypographyVariantType = VariantProps<typeof typographyVariants>["variant"];

export const typographyVariants = cva("", {
  variants: {
    variant: {
      h1: "text-h1 font-primary font-semibold leading-[1.1143] -tracking-[0.2px]",
      h2: "text-h2 font-primary font-semibold leading-[1.2222] -tracking-[0.2px]",
      h3: "text-h3 font-primary font-normal leading-[1.2222] tracking-[0.2px]",
      h4: "text-h4 font-primary font-normal leading-[1.5] tracking-[0.2px]",
      h5: "text-h5 font-primary font-normal leading-[1.5] tracking-[0.1px]",
      h6: "text-h6 font-primary font-medium leading-[1.5]",
      subtitle1:
        "text-subtitle1 font-primary font-medium leading-[1.3333] tracking-normal",
      subtitle2:
        "text-subtitle2 font-primary font-medium leading-[1.57] tracking-normal",
      body1:
        "text-body1 font-secondary font-normal leading-[1.5] tracking-normal",
      body2:
        "text-body2 font-secondary font-normal leading-[1.5] tracking-normal",
      caption:
        "text-caption font-secondary font-bold leading-[1.5] tracking-normal",
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
    variant: "body1",
    align: "left",
  },
});
