import { type HTMLAttributes, type JSX } from "react";

import { type VariantProps } from "cva";

import { cn } from "@/utils/styles";

import { badgeVariants } from "./badge.utils";

export interface BadgeProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "color">,
    VariantProps<typeof badgeVariants> {
  responsive?: boolean;
}

const Badge = ({
  ref,
  children,
  variant,
  size,
  color,
  responsive,
  className,
  ...props
}: BadgeProps & {
  ref: React.RefObject<HTMLDivElement>;
}): JSX.Element => {
  return (
    <div
      aria-label="badge"
      {...props}
      className={badgeVariants({
        variant,
        className: cn(
          {
            "dui-badge-xs md:dui-badge-sm lg:dui-badge-md xl:dui-badge-lg":
              responsive,
          },
          className,
        ),
        color,
        size,
      })}
      ref={ref}
    >
      {children}
    </div>
  );
};

Badge.displayName = "Badge";

export { Badge };
