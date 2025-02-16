import { cva } from "cva";

export const typographyVariants = cva("", {
  variants: {
    variant: {
      "display-l": "display-l",
      "display-m": "display-m",
      "display-s": "display-s",
      // Headline variants
      "headline-l": "headline-l",
      "headline-m": "headline-m",
      "headline-s": "headline-s",
      // Title variants
      "title-l": "title-l",
      "title-m": "title-m",
      "title-s": "title-s",
      // Body variants
      "body-l": "body-l",
      "body-m": "body-m",
      "body-s": "body-s",
      // Label variants
      "label-l": "label-l",
      "label-l-bold": "label-l-bold",
      "label-m": "label-m",
      "label-m-bold": "label-m-bold",
      "label-s": "label-s",
      "label-xs": "label-xs",
      // Caption variants
      "caption-l": "caption-l",
      "caption-m": "caption-m",
      "caption-s": "caption-s",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
    // ENOUGH TILL "lg"
    // Why needed ?
    // Because f it thats why 😑. Tailwind has removed `safelist` from v4 and don't want to use the config file.
    // So we need to add the classes manually so they are always available in the build.
    xs: {
      "display-l": "xs:display-l",
      "display-m": "xs:display-m",
      "display-s": "xs:display-s",
      "headline-l": "xs:headline-l",
      "headline-m": "xs:headline-m",
      "headline-s": "xs:headline-s",
      "title-l": "xs:title-l",
      "title-m": "xs:title-m",
      "title-s": "xs:title-s",
      "body-l": "xs:body-l",
      "body-m": "xs:body-m",
      "body-s": "xs:body-s",
      "label-l": "xs:label-l",
      "label-l-bold": "xs:label-l-bold",
      "label-m": "xs:label-m",
      "label-m-bold": "xs:label-m-bold",
      "label-s": "xs:label-s",
      "label-xs": "xs:label-xs",
      "caption-l": "xs:caption-l",
      "caption-m": "xs:caption-m",
      "caption-s": "xs:caption-s",
    },
    sm: {
      "display-l": "sm:display-l",
      "display-m": "sm:display-m",
      "display-s": "sm:display-s",
      "headline-l": "sm:headline-l",
      "headline-m": "sm:headline-m",
      "headline-s": "sm:headline-s",
      "title-l": "sm:title-l",
      "title-m": "sm:title-m",
      "title-s": "sm:title-s",
      "body-l": "sm:body-l",
      "body-m": "sm:body-m",
      "body-s": "sm:body-s",
      "label-l": "sm:label-l",
      "label-l-bold": "sm:label-l-bold",
      "label-m": "sm:label-m",
      "label-m-bold": "sm:label-m-bold",
      "label-s": "sm:label-s",
      "label-xs": "sm:label-xs",
      "caption-l": "sm:caption-l",
      "caption-m": "sm:caption-m",
      "caption-s": "sm:caption-s",
    },
    md: {
      "display-l": "md:display-l",
      "display-m": "md:display-m",
      "display-s": "md:display-s",
      "headline-l": "md:headline-l",
      "headline-m": "md:headline-m",
      "headline-s": "md:headline-s",
      "title-l": "md:title-l",
      "title-m": "md:title-m",
      "title-s": "md:title-s",
      "body-l": "md:body-l",
      "body-m": "md:body-m",
      "body-s": "md:body-s",
      "label-l": "md:label-l",
      "label-l-bold": "md:label-l-bold",
      "label-m": "md:label-m",
      "label-m-bold": "md:label-m-bold",
      "label-s": "md:label-s",
      "label-xs": "md:label-xs",
      "caption-l": "md:caption-l",
      "caption-m": "md:caption-m",
      "caption-s": "md:caption-s",
    },
    lg: {
      "display-l": "lg:display-l",
      "display-m": "lg:display-m",
      "display-s": "lg:display-s",
      "headline-l": "lg:headline-l",
      "headline-m": "lg:headline-m",
      "headline-s": "lg:headline-s",
      "title-l": "lg:title-l",
      "title-m": "lg:title-m",
      "title-s": "lg:title-s",
      "body-l": "lg:body-l",
      "body-m": "lg:body-m",
      "body-s": "lg:body-s",
      "label-l": "lg:label-l",
      "label-l-bold": "lg:label-l-bold",
      "label-m": "lg:label-m",
      "label-m-bold": "lg:label-m-bold",
      "label-s": "lg:label-s",
      "label-xs": "lg:label-xs",
      "caption-l": "lg:caption-l",
      "caption-m": "lg:caption-m",
      "caption-s": "lg:caption-s",
    },
  },
  defaultVariants: {
    variant: "body-m",
    align: "left",
  },
});
