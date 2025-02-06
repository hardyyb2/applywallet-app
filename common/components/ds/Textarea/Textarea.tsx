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
};

Textarea.displayName = "Textarea";

export { Textarea };
