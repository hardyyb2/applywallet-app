import { cva } from "cva";

export const buttonVariants = cva("btn font-secondary min-h-[unset]", {
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
      neutral: "btn-neutral",
    },
    shape: {
      circle: "btn-circle",
      square: "btn-square",
    },
    variant: {
      outline: "btn-outline",
      link: "btn-link",
    },
    fullWidth: {
      true: "btn-block",
    },
    responsive: {
      true: "btn-sm lg:btn-md",
    },
    animation: {
      false: "no-animation",
    },
    active: {
      true: "btn-active",
    },
    disabled: {
      true: "btn-disabled",
    },
  },
  defaultVariants: {
    disabled: false,
  },
});
