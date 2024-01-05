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
      xs: "dui-checkbox-xs",
      sm: "dui-checkbox-sm",
      md: "dui-checkbox-md",
      lg: "dui-checkbox-lg",
    },
  },
  defaultVariants: {
    size: "md",
  },
});
