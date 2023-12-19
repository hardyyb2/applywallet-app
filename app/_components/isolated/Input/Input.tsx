import { forwardRef, type InputHTMLAttributes, type ReactNode } from "react";

import { cnMerge } from "@/utils/styles";

import type { InputColorsType, InputSizeTypes } from "./input.types";

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
  responsive?: boolean;
  iconWrapperClassName?: string;
  /** renders the icons outside of the input i.e. without absolute positioning */
  iconSeparate?: boolean;
  /** className for 'Input' wrapper div, if 'startIcon' or 'endIcon' is provided */
  wrapperClassName?: string;
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
      iconWrapperClassName = "",
      wrapperClassName = "",
      iconSeparate = false,
      responsive = false,
      ...props
    },
    ref,
  ): JSX.Element => {
    const classNames = cnMerge(
      "dui-input",
      {
        "dui-input-lg": size === "lg",
        "dui-input-md": size === "md",
        "dui-input-sm": size === "sm",
        "dui-input-xs": size === "xs",
      },
      {
        "dui-input-primary": color === "primary",
        "dui-input-secondary": color === "secondary",
        "dui-input-accent": color === "accent",
        "dui-input-info": color === "info",
        "dui-input-success": color === "success",
        "dui-input-warning": color === "warning",
        "dui-input-error": color === "error",
        "dui-input-ghost": color === "ghost",
      },
      {
        "focus:outline-offset-0": !borderOffset,
        "dui-input-bordered": bordered,
      },
      responsive && "dui-input-sm md:dui-input-md",
      className,
    );

    if (startIcon || endIcon) {
      return (
        <div
          data-testid="input-wrapper"
          className={cnMerge(
            "relative flex w-full items-center",
            iconSeparate && "grid grid-cols-[1fr,auto] gap-2",
            wrapperClassName,
          )}
        >
          {startIcon && (
            <span
              data-testid="start-icon"
              className={cnMerge(
                !iconSeparate ? "absolute left-4 [&_svg]:w-5" : "[&_svg]:w-8",
                iconWrapperClassName,
              )}
            >
              {startIcon}
            </span>
          )}
          <input
            ref={ref}
            size={htmlSize}
            className={cnMerge(
              "w-full",
              {
                "pl-12": startIcon,
                "pr-12": endIcon,
              },
              classNames,
            )}
            {...props}
          />
          {endIcon && (
            <span
              data-testid="end-icon"
              className={cnMerge(
                !iconSeparate ? "absolute right-4 [&_svg]:w-5" : "[&_svg]:w-8",
                iconWrapperClassName,
              )}
            >
              {endIcon}
            </span>
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
