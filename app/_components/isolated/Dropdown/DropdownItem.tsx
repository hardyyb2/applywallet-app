import { forwardRef, type HTMLAttributes } from "react";

export type DropdownItemProps = HTMLAttributes<HTMLLIElement>;

const DropdownItem = forwardRef<HTMLLIElement, DropdownItemProps>(
  ({ ...props }, ref) => {
    return <li {...props} ref={ref} />;
  },
);

DropdownItem.displayName = "DropdownItem";

export { DropdownItem };
