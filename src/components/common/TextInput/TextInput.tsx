import clsx from "clsx";
import { forwardRef, InputHTMLAttributes } from "react";
import { TextInputSizeType, TextInputVariantType } from "./textInput.types";

export interface TextInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  variant?: TextInputVariantType;
  size?: TextInputSizeType;
  bordered?: boolean;
  /** The native size attribute of input element */
  htmlSize?: number;
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ variant = "default", size = "md", bordered = true, htmlSize, className = "", ...rest }, ref) => {
    return (
      <input
        ref={ref}
        size={htmlSize}
        className={clsx(
          "input",
          {
            "input-primary": variant === "primary",
            "input-secondary": variant === "secondary",
            "input-accent": variant === "accent",
            "input-error": variant === "error",
            "input-ghost": variant === "ghost",
            "input-link": variant === "link",
            "": variant === "default",
          },
          {
            "input-lg": size === "lg",
            "input-md": size === "md",
            "input-sm": size === "sm",
            "input-xs": size === "xs",
          },
          bordered && "input-bordered",
          className,
        )}
        {...rest}
      />
    );
  },
);

TextInput.displayName = "TextInput";

export { TextInput };
