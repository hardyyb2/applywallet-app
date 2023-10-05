import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";

import { type VariantProps } from "cva";

import { cn } from "@/utils/styles.utils";

import { buttonVariants } from "./button.utils";

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color">,
    VariantProps<typeof buttonVariants> {
  fullWidth?: boolean;
  responsive?: boolean;
  animation?: boolean;
  loading?: boolean;
  active?: boolean;
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
            className: cn(
              ((startIcon && !loading) || endIcon) && "gap-2",
              // states
              {
                "btn-block": fullWidth,
                "btn-sm lg:btn-md ": responsive,
                "no-animation": !animation,
                "btn-active": active,
                "btn-disabled": disabled,
              },
              className,
            ),
          }),
        )}
        disabled={disabled}
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
