import clsx from "clsx";
import { ButtonHTMLAttributes, forwardRef } from "react";

import { ButtonShapeType, ButtonSizeType, ButtonVariantType } from "./button.types";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariantType;
  size?: ButtonSizeType;
  shape?: ButtonShapeType;
  animate?: boolean;
  loading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "default",
      size = "md",
      shape = "",
      animate = true,
      loading = false,
      type = "button",
      className = "",
      ...rest
    },
    ref,
  ) => {
    return (
      <button
        type={type}
        ref={ref}
        className={clsx(
          "btn",
          {
            "btn-primary": variant === "primary",
            "btn-secondary": variant === "secondary",
            "btn-accent": variant === "accent",
            "btn-error": variant === "error",
            "btn-ghost": variant === "ghost",
            "btn-link": variant === "link",
            "": variant === "default",
          },
          {
            "btn-lg": size === "lg",
            "btn-md": size === "md",
            "btn-sm": size === "sm",
            "btn-xs": size === "xs",
          },
          {
            "btn-wide": shape === "wide",
            "btn-block": shape === "block",
            "btn-circle": shape === "circle",
            "btn-square": shape === "square",
            "": shape === "default",
          },
          !animate && "no-animation",
          loading && "loading",
          className,
        )}
        {...rest}
      />
    );
  },
);

Button.displayName = "Button";

export { Button };
