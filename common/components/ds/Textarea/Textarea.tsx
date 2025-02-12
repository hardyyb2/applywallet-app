import { type ComponentProps } from "react";

import { cn } from "@/utils/styles";

import type { TextareaColorsType } from "./textarea.types";

export type TextareaProps = Omit<ComponentProps<"textarea">, "color"> & {
  color?: TextareaColorsType;
  bordered?: boolean;
  borderOffset?: boolean;
};

const Textarea = ({
  ref,
  bordered = true,
  borderOffset = true,
  color,
  className,
  ...props
}: TextareaProps) => {
  const classes = cn(
    "d-textarea",
    {
      "d-textarea-primary": color === "primary",
      "d-textarea-secondary": color === "secondary",
      "d-textarea-accent": color === "accent",
      "d-textarea-info": color === "info",
      "d-textarea-success": color === "success",
      "d-textarea-warning": color === "warning",
      "d-textarea-error": color === "error",
      "d-textarea-ghost": color === "ghost",
    },
    {
      [`focus:outline-offset-0`]: !borderOffset,
      "d-textarea-bordered": bordered,
    },
    className,
  );

  return <textarea {...props} className={classes} ref={ref} />;
};

Textarea.displayName = "Textarea";

export { Textarea };
