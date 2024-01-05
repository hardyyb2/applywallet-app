import { cva } from "cva";

export const checkboxVariants = cva("peer dui-checkbox", {
  variants: {
    color: {
      primary: "dui-checkbox-primary",
      secondary: "dui-checkbox-secondary",
      accent: "dui-checkbox-accent",
      success: "dui-checkbox-success",
      warning: "dui-checkbox-warning",
      error: "dui-checkbox-error",
      info: "dui-checkbox-info",
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
