import clsx from "clsx";
import { forwardRef, HTMLAttributes } from "react";

import { BottomNavigationSizeTypes } from "./bottomNavigation.types";
import BottomNavigationLabel from "./BottomNavigationLabel";

export type BottomNavigationProps = HTMLAttributes<HTMLDivElement> & {
  size?: BottomNavigationSizeTypes;
};

const BottomNavigation = forwardRef<HTMLDivElement, BottomNavigationProps>(
  ({ size, className, children, ...props }, ref): JSX.Element => {
    return (
      <div
        {...props}
        className={clsx(
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

export default Object.assign(BottomNavigation, {
  Label: BottomNavigationLabel,
});
