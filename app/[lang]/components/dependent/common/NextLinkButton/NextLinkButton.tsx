import clsx from "clsx";
import Link, { LinkProps } from "next/link";
import { forwardRef, ReactNode } from "react";

import {
  NextLinkButtonColorsType,
  NextLinkButtonSizeTypes,
  NextLinkButtonShapeType,
} from "./NextLinkButton.types";

export type NextLinkButtonProps = LinkProps & {
  shape?: NextLinkButtonShapeType;
  size?: NextLinkButtonSizeTypes;
  variant?: "outline" | "link";
  color?: NextLinkButtonColorsType;
  fullWidth?: boolean;
  responsive?: boolean;
  animation?: boolean;
  loading?: boolean;
  active?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  children?: ReactNode;
  className?: string;
};

const NextLinkButton = forwardRef<HTMLAnchorElement, NextLinkButtonProps>(
  (
    {
      children = null,
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
      className,
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
        "btn-sm lg:btn-md xl:btn-lg": responsive,
        "no-animation": !animation,
        "btn-active": active,
      },
      loading && "loading",
      className,
    );

    return (
      <Link {...rest} ref={ref} className={classes}>
        {startIcon && !loading && startIcon}
        {children}
        {endIcon && endIcon}
      </Link>
    );
  },
);

NextLinkButton.displayName = "Button";

export { NextLinkButton };

console.log("[RENDER] components/dependent/common/NextLinkButton/NextLinkButton.tsx");