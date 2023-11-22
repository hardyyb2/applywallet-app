import { forwardRef, type InputHTMLAttributes, type ReactNode } from "react";

import { cnMerge } from "@/utils/styles";

import type { InputColorsType, InputSizeTypes } from "./Input.types";

export type InputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "size" | "color"
> & {
  bordered?: boolean;
  borderOffset?: boolean;
  size?: InputSizeTypes;
  color?: InputColorsType;
  htmlSize?: number;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      bordered = true,
      borderOffset = true,
      size,
      color,
      className,
      htmlSize,
      startIcon = null,
      endIcon = null,
      ...props
    },
    ref,
  ): JSX.Element => {
    const classNames = cnMerge(
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

    if (startIcon || endIcon) {
      return (
        <div className="relative flex w-full items-center">
          {startIcon && (
            <span className="absolute left-4 [&>svg]:w-5">{startIcon}</span>
          )}
          <input
            ref={ref}
            size={htmlSize}
            className={cnMerge(classNames, "w-full", {
              "pl-12": startIcon,
              "pr-12": endIcon,
            })}
            {...props}
          />
          {endIcon && (
            <span className="absolute right-4 [&>svg]:w-5">{endIcon}</span>
          )}
        </div>
      );
    }

    return (
      <input ref={ref} size={htmlSize} className={classNames} {...props} />
    );
  },
);

Input.displayName = "Input";

export { Input };
