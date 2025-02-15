import { type ComponentProps, type ReactNode } from "react";

import type { VariantProps } from "cva";

import { cnM } from "@/utils/styles";

import { inputVariants } from "./input.utils";

export interface InputProps
  extends Omit<ComponentProps<"input">, "size" | "color">,
    VariantProps<typeof inputVariants> {
  htmlSize?: number;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  iconWrapperClassName?: string;
  /** renders the icons outside of the input i.e. without absolute positioning */
  iconSeparate?: boolean;
  /** className for 'Input' wrapper div, if 'startIcon' or 'endIcon' is provided */
  wrapperClassName?: string;
}

const Input = ({
  ref,
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
}: InputProps): JSX.Element => {
  if (startIcon || endIcon) {
    return (
      <div
        data-testid="input-wrapper"
        className={cnM(
          "relative flex w-full items-center",
          iconSeparate && "grid grid-cols-[1fr_auto] gap-2",
          wrapperClassName,
        )}
      >
        {startIcon && (
          <span
            data-testid="start-icon"
            className={cnM(
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
          className={cnM(
            inputVariants({
              bordered,
              borderOffset,
              size,
              color,
              responsive,
              className,
            }),
            {
              "pl-12": startIcon,
              "pr-12": endIcon,
            },
          )}
          {...props}
        />
        {endIcon && (
          <span
            data-testid="end-icon"
            className={cnM(
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
    <input
      ref={ref}
      size={htmlSize}
      className={inputVariants({
        bordered,
        borderOffset,
        size,
        color,
        responsive,
        className,
      })}
      {...props}
    />
  );
};

Input.displayName = "Input";

export { Input };
