import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";

import { type VariantProps } from "cva";

import { cn } from "@/utils/styles.utils";

import { buttonVariants } from "./button.utils";

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color" | "disabled">,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      shape,
      size,
      variant,
      color,
      startIcon,
      endIcon,
      fullWidth,
      responsive,
      animation = true,
      loading,
      active,
      disabled,
      className,
      ...rest
    },
    ref,
  ): JSX.Element => {
    return (
      <button
        {...rest}
        ref={ref}
        className={cn(
          buttonVariants({
            color,
            shape,
            size,
            variant,
            fullWidth,
            responsive,
            animation,
            active,
            disabled,
            className: cn(
              ((startIcon && !loading) || endIcon) && "gap-2",
              className,
            ),
          }),
        )}
        disabled={disabled ?? false}
      >
        {loading ? <span className="loading" /> : startIcon}
        {children}
        {endIcon && endIcon}
      </button>
    );
  },
);

Button.displayName = "Button";

export { Button };
