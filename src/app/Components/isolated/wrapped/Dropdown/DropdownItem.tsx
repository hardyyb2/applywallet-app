import React, { forwardRef } from "react";

export type DropdownItemProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

const DropdownItem = forwardRef<HTMLAnchorElement, DropdownItemProps>(
  ({ className, ...props }, ref) => {
    return (
      <li className={className}>
        <a ref={ref} {...props}></a>
      </li>
    );
  },
);

DropdownItem.displayName = "DropdownItem";

export { DropdownItem };
