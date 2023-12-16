import { forwardRef, type TextareaHTMLAttributes } from "react";

import { cn } from "@/utils/styles";

import type { TextareaColorsType } from "./textarea.types";

export type TextareaProps = Omit<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  "color"
> & {
  color?: TextareaColorsType;
  bordered?: boolean;
  borderOffset?: boolean;
};

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    { bordered = true, borderOffset = true, color, className, ...props },
    ref,
  ): JSX.Element => {
    const classes = cn(
      "textarea",
      {
        "textarea-primary": color === "primary",
        "textarea-secondary": color === "secondary",
        "textarea-accent": color === "accent",
        "textarea-info": color === "info",
        "textarea-success": color === "success",
        "textarea-warning": color === "warning",
        "textarea-error": color === "error",
        "textarea-ghost": color === "ghost",
      },
      {
        [`focus:outline-offset-0`]: !borderOffset,
        "textarea-bordered": bordered,
      },
      className,
    );

    return <textarea {...props} className={classes} ref={ref} />;
  },
);

Textarea.displayName = "Textarea";

export { Textarea };
