import { cva } from "cva";

export const avatarVariants = cva("dui-avatar overflow-hidden", {
  variants: {
    size: {
      xl: "w-xl",
      lg: "w-l",
      md: "w-m",
      sm: "w-s",
      xs: "w-xs",
    },
    shape: {
      circle: "rounded-full",
      square: "rounded-xl",
    },
    color: {
      primary: "bg-primary text-primary-content",
      secondary: "bg-secondary text-secondary-content",
      accent: "bg-accent text-accent-content",
      neutral: "bg-neutral text-neutral-content",
    },
    border: {
      true: "ring ring-offset-2",
    },
  },
  compoundVariants: [
    {
      border: true,
      color: "primary",
      className: "ring-primary",
    },
    {
      border: true,
      color: "secondary",
      className: "ring-secondary",
    },
    {
      border: true,
      color: "accent",
      className: "ring-accent",
    },
    {
      border: true,
      color: "neutral",
      className: "ring-neutral",
    },
  ],
  defaultVariants: {
    size: "lg",
    shape: "square",
    color: "neutral",
    border: true,
  },
});
