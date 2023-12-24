import { cva } from "cva";

export const badgeVariants = cva("dui-badge", {
  variants: {
    size: {
      lg: "dui-badge-lg",
      md: "dui-badge-md",
      sm: "dui-badge-sm",
      xs: "dui-badge-xs",
    },
    color: {
      neutral: "dui-badge-neutral",
      primary: "dui-badge-primary",
      secondary: "dui-badge-secondary",
      accent: "dui-badge-accent",
      info: "dui-badge-info",
      success: "dui-badge-success",
      warning: "dui-badge-warning",
      error: "dui-badge-error",
      ghost: "dui-badge-ghost",
    },
    variant: {
      outline: "dui-badge-outline",
    },
  },
});
