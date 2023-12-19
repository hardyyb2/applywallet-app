import { cva } from "cva";

export const selectVariants = cva("rounded-btn", {
  variants: {
    size: {
      lg: "dui-select-lg",
      md: "dui-select-md",
      sm: "dui-select-sm",
      xs: "dui-select-xs",
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
    responsive: {
      true: "dui-select-sm md:dui-select-md",
    },
  },
});
