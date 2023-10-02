import { forwardRef, HTMLAttributes } from "react";

import { cn } from "@/_utils/styles.utils";
import { type VariantProps } from "cva";

import { badgeVariants } from "./badge.utils";

export interface BadgeProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "color">,
    VariantProps<typeof badgeVariants> {
  responsive?: boolean;
}

const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  (
    { children, variant, size, color, responsive, className, ...props },
    ref,
  ): JSX.Element => {
    return (
      <div
        aria-label="badge"
        {...props}
        className={badgeVariants({
          variant,
          className: cn(
            { "badge-xs md:badge-sm lg:badge-md xl:badge-lg": responsive },
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
  },
);

Badge.displayName = "Badge";

export { Badge };
