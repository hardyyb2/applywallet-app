import { type ComponentProps } from "react";

import { type VariantProps } from "cva";

import { cn } from "@/utils/styles";

import { badgeVariants } from "./badge.utils";

export interface BadgeProps
  extends Omit<ComponentProps<"div">, "color">,
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
}: BadgeProps) => {
  return (
    <div
      aria-label="badge"
      {...props}
      className={badgeVariants({
        variant,
        className: cn(
          {
            "d-badge-xs md:d-badge-sm lg:d-badge-md xl:d-badge-lg": responsive,
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
