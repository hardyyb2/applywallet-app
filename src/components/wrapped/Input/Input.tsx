import clsx from "clsx";
import React, { forwardRef } from "react";

import { InputColorsType, InputSizeTypes } from "./Input.types";

export type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "color"> & {
  bordered?: boolean;
  borderOffset?: boolean;
  size?: InputSizeTypes;
  color?: InputColorsType;
  htmlSize?: number;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ bordered = true, borderOffset = true, size, color, className, htmlSize, ...props }, ref): JSX.Element => {
    const classes = clsx(
      "input",
      {
        "input-lg": size === "lg",
        "input-md": size === "md",
        "input-sm": size === "sm",
        "input-xs": size === "xs",
      },
      {
        "input-primary": color === "primary",
        "input-secondary": color === "secondary",
        "input-accent": color === "accent",
        "input-info": color === "info",
        "input-success": color === "success",
        "input-warning": color === "warning",
        "input-error": color === "error",
        "input-ghost": color === "ghost",
      },
      {
        "focus:outline-offset-0": !borderOffset,
        "input-bordered": bordered,
      },
      className,
    );

    return <input ref={ref} size={htmlSize} className={classes} {...props} />;
  },
);

Input.displayName = "Input";

export default Input;
