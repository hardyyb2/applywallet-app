import { cva } from "cva";

export const buttonVariants = cva("btn font-secondary", {
  variants: {
    size: {
      lg: "btn-lg",
      md: "btn-md",
      sm: "btn-sm",
      xs: "btn-xs",
    },
    color: {
      primary: "btn-primary",
      secondary: "btn-secondary",
      accent: "btn-accent",
      info: "btn-info",
      success: "btn-success",
      warning: "btn-warning",
      error: "btn-error",
      ghost: "btn-ghost",
    },
    shape: {
      circle: "btn-circle",
      square: "btn-square",
    },
    variant: {
      outline: "btn-outline",
      link: "btn-link",
    },
  },
});
