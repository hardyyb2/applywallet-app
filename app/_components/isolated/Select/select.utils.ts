import { cva } from "cva";

export const selectVariants = cva("rounded-btn", {
  variants: {
    size: {
      lg: "select-lg",
      md: "select-md",
      sm: "select-sm",
      xs: "select-xs",
    },
    color: {
      primary: "border border-primary",
      secondary: "border border-secondary",
      accent: "border border-accent",
      info: "border border-info",
      success: "border border-success",
      warning: "border border-warning",
      error: "border border-error",
      ghost: "border border-ghost",
    },
  },
});
