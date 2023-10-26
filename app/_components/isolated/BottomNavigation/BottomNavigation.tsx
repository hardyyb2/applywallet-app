import { forwardRef, type HTMLAttributes } from "react";

import { cn } from "@/utils/styles.utils";

import type { BottomNavigationSizeTypes } from "./bottomNavigation.types";
import { BottomNavigationLabel } from "./BottomNavigationLabel";

export type BottomNavigationProps = HTMLAttributes<HTMLDivElement> & {
  size?: BottomNavigationSizeTypes;
};

const BottomNavigation = forwardRef<HTMLDivElement, BottomNavigationProps>(
  ({ size, className, children, ...props }, ref): JSX.Element => {
    return (
      <div
        {...props}
        className={cn(
          "btm-nav",
          {
            "btm-nav-xs": size === "xs",
            "btm-nav-sm": size === "sm",
            "btm-nav-md": size === "md",
            "btm-nav-lg": size === "lg",
          },
          className,
        )}
        ref={ref}
      >
        {children}
      </div>
    );
  },
);

BottomNavigation.displayName = "BottomNavigation";

const BottomNavigationCompound = Object.assign(BottomNavigation, {
  Label: BottomNavigationLabel,
});

export { BottomNavigationCompound as BottomNavigation };
