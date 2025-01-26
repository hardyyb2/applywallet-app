import { forwardRef, type JSX, type TextareaHTMLAttributes } from "react";

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
      "dui-textarea",
      {
        "dui-textarea-primary": color === "primary",
        "dui-textarea-secondary": color === "secondary",
        "dui-textarea-accent": color === "accent",
        "dui-textarea-info": color === "info",
        "dui-textarea-success": color === "success",
        "dui-textarea-warning": color === "warning",
        "dui-textarea-error": color === "error",
        "dui-textarea-ghost": color === "ghost",
      },
      {
        [`focus:outline-offset-0`]: !borderOffset,
        "dui-textarea-bordered": bordered,
      },
      className,
    );

    return <textarea {...props} className={classes} ref={ref} />;
  },
);

Textarea.displayName = "Textarea";

export { Textarea };
