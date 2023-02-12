import clsx from "clsx";
import React, { forwardRef, ReactNode } from "react";

import { DropdownItem } from "./DropdownItem";
import { DropdownMenu } from "./DropdownMenu";

export type DropdownProps = React.HTMLAttributes<HTMLDivElement> & {
  item?: ReactNode;
  horizontal?: "left" | "center" | "right";
  vertical?: "top" | "middle" | "end";
  hover?: boolean;
  open?: boolean;
};

const Dropdown = forwardRef<HTMLDivElement, DropdownProps>(
  (
    { children, className, item, horizontal, vertical, hover, open, ...props },
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
        {item}
        <div className="dropdown-content">
          <ul tabIndex={0}>{children}</ul>
        </div>
      </div>
    );
  },
);

Dropdown.displayName = "Dropdown";

const DropdownCompound = Object.assign(Dropdown, {
  Menu: DropdownMenu,
  Item: DropdownItem,
});

export { DropdownCompound as Dropdown };
