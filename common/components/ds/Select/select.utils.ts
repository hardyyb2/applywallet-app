import { cva } from "cva";

export const selectVariants = cva("rounded-btn !min-h-[unset]", {
  variants: {
    size: {
      lg: "d-select-lg",
      md: "d-select-md",
      sm: "d-select-sm",
      xs: "d-select-xs",
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
      true: "d-select-sm md:d-select-md",
    },
  },
});
