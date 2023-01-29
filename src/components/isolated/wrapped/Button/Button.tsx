import clsx from "clsx";
import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";

import { ButtonColorsType, ButtonSizeTypes, ButtonShapeType } from "./Button.types";

export type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color"> & {
  href?: string;
  shape?: ButtonShapeType;
  size?: ButtonSizeTypes;
  variant?: "outline" | "link";
  color?: ButtonColorsType;
  fullWidth?: boolean;
  responsive?: boolean;
  animation?: boolean;
  loading?: boolean;
  active?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      href,
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
      style,
      ...rest
    },
    ref,
  ): JSX.Element => {
    const classes = clsx(
      "btn",
      ((startIcon && !loading) || endIcon) && "gap-2",
      {
        "btn-lg": size === "lg",
        "btn-md": size === "md",
        "btn-sm": size === "sm",
        "btn-xs": size === "xs",
      },
      {
        "btn-primary": color === "primary",
        "btn-secondary": color === "secondary",
        "btn-accent": color === "accent",
        "btn-info": color === "info",
        "btn-success": color === "success",
        "btn-warning": color === "warning",
        "btn-error": color === "error",
        "btn-ghost": color === "ghost",
      },
      {
        "btn-circle": shape === "circle",
        "btn-square": shape === "square",
      },
      {
        "btn-outline": variant === "outline",
        "btn-link": variant === "link",
      },
      // States
      {
        "btn-block": fullWidth,
        "btn-xs md:btn-sm lg:btn-md xl:btn-lg": responsive,
        "no-animation": !animation,
        "btn-active": active,
        "btn-disabled": disabled,
      },
      loading && "loading",
      className,
    );

    if (href) {
      return (
        <a className={classes} style={style} href={href}>
          {startIcon && startIcon}
          {children}
          {endIcon && endIcon}
        </a>
      );
    }

    return (
      <button {...rest} ref={ref} className={classes} style={style} disabled={disabled}>
        {startIcon && !loading && startIcon}
        {children}
        {endIcon && endIcon}
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;
