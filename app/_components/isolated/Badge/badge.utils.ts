import { cva } from "cva";

export const badgeVariants = cva("badge", {
  variants: {
    size: {
      lg: "badge-lg",
      md: "badge-md",
      sm: "badge-sm",
      xs: "badge-xs",
    },
    color: {
      neutral: "badge-neutral",
      primary: "badge-primary",
      secondary: "badge-secondary",
      accent: "badge-accent",
      info: "badge-info",
      success: "badge-success",
      warning: "badge-warning",
      error: "badge-error",
      ghost: "badge-ghost",
    },
    variant: {
      outline: "badge-outline",
    },
  },
});
