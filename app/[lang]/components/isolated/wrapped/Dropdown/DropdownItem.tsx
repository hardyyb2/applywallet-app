import { forwardRef, HTMLAttributes } from "react";

export type DropdownItemProps = HTMLAttributes<HTMLLIElement>;

const DropdownItem = forwardRef<HTMLLIElement, DropdownItemProps>(
  ({ ...props }, ref) => {
    return <li {...props} ref={ref} />;
  },
);

DropdownItem.displayName = "DropdownItem";

export { DropdownItem };

console.log("[RENDER] components/isolated/wrapped/Dropdown/DropdownItem.tsx");