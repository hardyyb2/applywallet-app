import { cva } from "cva";

export const checkboxVariants = cva("peer d-checkbox", {
  variants: {
    color: {
      primary: "d-checkbox-primary",
      secondary: "d-checkbox-secondary",
      accent: "d-checkbox-accent",
      success: "d-checkbox-success",
      warning: "d-checkbox-warning",
      error: "d-checkbox-error",
      info: "d-checkbox-info",
    },
    size: {
      xs: "h-4 w-4",
      sm: "h-5 w-5",
      md: "h-6 w-6",
      lg: "h-8 w-8",
    },
    responsive: {
      true: "h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6",
    },
  },
  defaultVariants: {
    size: "md",
  },
});
