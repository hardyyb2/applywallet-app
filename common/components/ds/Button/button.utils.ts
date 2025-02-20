import { cva } from "cva";

export const buttonVariants = cva(
  "d-btn body-s lg:body-m font-secondary overflow-hidden",
  {
    variants: {
      size: {
        lg: "d-btn-lg",
        md: "d-btn-md",
        sm: "d-btn-sm",
        xs: "d-btn-xs",
        xl: "d-btn-xl",
      },
      color: {
        primary: "d-btn-primary",
        secondary: "d-btn-secondary",
        accent: "d-btn-accent",
        info: "d-btn-info",
        success: "d-btn-success",
        warning: "d-btn-warning",
        error: "d-btn-error",
        ghost: "d-btn-ghost",
        neutral: "d-btn-neutral",
      },
      shape: {
        circle: "d-btn-circle",
        square: "d-btn-square",
      },
      variant: {
        outline: "d-btn-outline",
        link: "d-btn-link",
        soft: "d-btn-soft",
      },
      fullWidth: {
        true: "d-btn-block",
      },
      wide: {
        true: "d-btn-wide",
      },
      responsive: {
        true: "d-btn-sm md:d-btn-md",
      },
      animation: {
        false: "no-animation",
      },
      active: {
        true: "d-btn-active",
      },
      disabled: {
        true: "d-btn-disabled",
      },
    },
    defaultVariants: {
      disabled: false,
    },
  },
);
