import { cva } from "cva";

const inputVariants = cva("d-input w-full", {
  variants: {
    color: {
      primary: "d-input-primary",
      secondary: "d-input-secondary",
      accent: "d-input-accent",
      info: "d-input-info",
      success: "d-input-success",
      warning: "d-input-warning",
      error: "d-input-error",
      ghost: "d-input-ghost",
    },
    size: {
      lg: "d-input-lg",
      md: "d-input-md",
      sm: "d-input-sm",
      xs: "d-input-xs",
    },
    bordered: {
      true: "d-input-bordered",
    },
    borderOffset: {
      false: "focus:outline-offset-0",
    },
    responsive: {
      true: "d-input-sm md:d-input-md",
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
