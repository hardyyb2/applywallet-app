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
        "dui-btm-nav",
        {
          "dui-btm-nav-xs": size === "xs",
          "dui-btm-nav-sm": size === "sm",
          "dui-btm-nav-md": size === "md",
          "dui-btm-nav-lg": size === "lg",
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
