import { AnchorHTMLAttributes, forwardRef } from "react";

export type DropdownItemProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  containerClassName?: string;
};

const DropdownItem = forwardRef<HTMLAnchorElement, DropdownItemProps>(
  ({ containerClassName, ...props }, ref) => {
    return (
      <li className={containerClassName}>
        <a ref={ref} {...props}></a>
      </li>
    );
  },
);

DropdownItem.displayName = "DropdownItem";

export { DropdownItem };
