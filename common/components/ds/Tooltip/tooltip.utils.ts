import { cva } from "cva";

export const tooltipArrowVariants = cva("fill-base-100", {
  variants: {
    color: {
      primary: "fill-primary",
      secondary: "fill-secondary",
      accent: "fill-accent",
      info: "fill-info",
      success: "fill-success",
      warning: "fill-warning",
      error: "fill-error",
      neutral: "fill-neutral",
    },
  },
});

export const tooltipContentVariants = cva(
  "z-50 overflow-hidden rounded-md px-3 py-1.5 bg-base-100 text-base-content",
  {
    variants: {
      color: {
        primary: "bg-primary text-primary-content",
        secondary: "bg-secondary text-secondary-content",
        accent: "bg-accent text-accent-content",
        info: "bg-info text-info-content",
        success: "bg-success text-success-content",
        warning: "bg-warning text-warning-content",
        error: "bg-error text-error-content",
        neutral: "bg-neutral text-neutral-content",
      },
    },
  },
);
