import { forwardRef } from "react";

import clsx from "clsx";

import { DropdownItem } from "./components/DropdownItem";
import { DropdownMenu } from "./components/DropdownMenu";
import { DropdownToggle } from "./components/DropdownToggle";

export type DropdownProps = React.HTMLAttributes<HTMLDivElement> & {
  horizontal?: "left" | "center" | "right";
  vertical?: "top" | "middle" | "end";
  hover?: boolean;
  open?: boolean;
};

const Dropdown = forwardRef<HTMLDivElement, DropdownProps>(
  (
    { children, className, horizontal, vertical, hover, open, ...props },
    ref,
  ): JSX.Element => {
    return (
      <div
        role="listbox"
        {...props}
        ref={ref}
        className={clsx(
          "dropdown",
          {
            "dropdown-left": horizontal === "left",
            "dropdown-center": horizontal === "center",
            "dropdown-right": horizontal === "right",
          },
          {
            "dropdown-top": vertical === "top",
            "dropdown-middle": vertical === "middle",
            "dropdown-end": vertical === "end",
          },
          hover && "dropdown-hover",
          open && "dropdown-open",
          className,
        )}
      >
        {children}
      </div>
    );
  },
);

Dropdown.displayName = "Dropdown";

const DropdownCompound = Object.assign(Dropdown, {
  Menu: DropdownMenu,
  Item: DropdownItem,
  Toggle: DropdownToggle,
});

export { DropdownCompound as Dropdown };
