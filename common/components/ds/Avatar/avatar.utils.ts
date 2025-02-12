import { cva } from "cva";

export const avatarVariants = cva(
  "d-avatar overflow-hidden shrink-0 grow-0 aspect-square",
  {
    variants: {
      shape: {
        square: "rounded-xl",
        circle: "rounded-full",
      },
      size: {
        xl: "w-xl rounded-2xl",
        lg: "w-l rounded-xl",
        md: "w-m rounded-lg",
        sm: "w-s rounded-md",
        xs: "w-xs rounded-xs",
      },
      color: {
        primary: "bg-primary text-primary-content",
        secondary: "bg-secondary text-secondary-content",
        accent: "bg-accent text-accent-content",
        neutral: "bg-neutral text-neutral-content",
      },
      border: {
        true: "ring-3 ring-offset-2",
      },
    },
    compoundVariants: [
      {
        shape: "circle",
        className: "rounded-full",
      },
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
  },
);
