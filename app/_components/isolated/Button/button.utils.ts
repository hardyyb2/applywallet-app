import { cva } from "cva";

export const buttonVariants = cva("dui-btn font-secondary min-h-[unset]", {
  variants: {
    size: {
      lg: "dui-btn-lg",
      md: "dui-btn-md",
      sm: "dui-btn-sm",
      xs: "dui-btn-xs",
    },
    color: {
      primary: "dui-btn-primary",
      secondary: "dui-btn-secondary",
      accent: "dui-btn-accent",
      info: "dui-btn-info",
      success: "dui-btn-success",
      warning: "dui-btn-warning",
      error: "dui-btn-error",
      ghost: "dui-btn-ghost",
      neutral: "dui-btn-neutral",
    },
    shape: {
      circle: "dui-btn-circle",
      square: "dui-btn-square",
    },
    variant: {
      outline: "dui-btn-outline",
      link: "dui-btn-link",
    },
    fullWidth: {
      true: "dui-btn-block",
    },
    responsive: {
      true: "dui-btn-sm md:dui-btn-md",
    },
    animation: {
      false: "no-animation",
    },
    active: {
      true: "dui-btn-active",
    },
    disabled: {
      true: "dui-btn-disabled",
    },
  },
  defaultVariants: {
    disabled: false,
  },
});
