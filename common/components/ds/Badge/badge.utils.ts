import { cva } from "cva";

export const badgeVariants = cva("d-badge", {
  variants: {
    size: {
      lg: "d-badge-lg",
      md: "d-badge-md",
      sm: "d-badge-sm",
      xs: "d-badge-xs",
    },
    color: {
      neutral: "d-badge-neutral",
      primary: "d-badge-primary",
      secondary: "d-badge-secondary",
      accent: "d-badge-accent",
      info: "d-badge-info",
      success: "d-badge-success",
      warning: "d-badge-warning",
      error: "d-badge-error",
      ghost: "d-badge-ghost",
    },
    variant: {
      outline: "d-badge-outline",
    },
  },
});
