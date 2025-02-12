import { type ComponentProps, type JSX } from "react";

import { cn } from "@/utils/styles";

import type { BottomNavigationSizeTypes } from "./bottomNavigation.types";

/** <BottomNavigationLabel> */
export type BottomNavigationLabelProps = ComponentProps<"span">;

const BottomNavigationLabel = ({
  ref,
  children,
  className,
  ...props
}: BottomNavigationLabelProps) => {
  return (
    <span {...props} className={cn(className)} ref={ref}>
      {children}
    </span>
  );
};

BottomNavigationLabel.displayName = "BottomNavigationLabel";
/** </BottomNavigationLabel> */

export type BottomNavigationProps = ComponentProps<"div"> & {
  size?: BottomNavigationSizeTypes;
};

const BottomNavigation = ({
  ref,
  size,
  className,
  children,
  ...props
}: BottomNavigationProps): JSX.Element => {
  return (
    <div
      {...props}
      className={cn(
        "d-btm-nav",
        {
          "d-btm-nav-xs": size === "xs",
          "d-btm-nav-sm": size === "sm",
          "d-btm-nav-md": size === "md",
          "d-btm-nav-lg": size === "lg",
        },
        className,
      )}
      ref={ref}
    >
      {children}
    </div>
  );
};

BottomNavigation.displayName = "BottomNavigation";

const BottomNavigationCompound = Object.assign(BottomNavigation, {
  Label: BottomNavigationLabel,
});

export { BottomNavigationCompound as BottomNavigation };
