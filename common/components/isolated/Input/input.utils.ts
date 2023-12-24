import { cva } from "cva";

const inputVariants = cva("dui-input w-full", {
  variants: {
    color: {
      primary: "dui-input-primary",
      secondary: "dui-input-secondary",
      accent: "dui-input-accent",
      info: "dui-input-info",
      success: "dui-input-success",
      warning: "dui-input-warning",
      error: "dui-input-error",
      ghost: "dui-input-ghost",
    },
    size: {
      lg: "dui-input-lg",
      md: "dui-input-md",
      sm: "dui-input-sm",
      xs: "dui-input-xs",
    },
    bordered: {
      true: "dui-input-bordered",
    },
    borderOffset: {
      false: "focus:outline-offset-0",
    },
    responsive: {
      true: "dui-input-sm md:dui-input-md",
    },
  },
  defaultVariants: {
    size: "md",
    bordered: true,
    borderOffset: true,
    responsive: false,
  },
});

export { inputVariants };
