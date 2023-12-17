// TODO - remove this component
import {
  forwardRef,
  type HTMLAttributes,
  type LabelHTMLAttributes,
} from "react";

import { cn } from "@/utils/styles";

type DropdownItemProps = HTMLAttributes<HTMLLIElement>;

const DropdownItem = forwardRef<HTMLLIElement, DropdownItemProps>(
  ({ ...props }, ref) => {
    return <li {...props} ref={ref} />;
  },
);

DropdownItem.displayName = "DropdownItem";

type DropdownMenuProps = HTMLAttributes<HTMLUListElement>;

const DropdownMenu = ({ className, ...props }: DropdownMenuProps) => {
  return (
    <ul
      {...props}
      tabIndex={0}
      className={cn(
        "dui-menu dui-dropdown-content rounded-box bg-base-100 p-2 shadow",
        className,
      )}
    />
  );
};

type DropdownToggleProps = Omit<LabelHTMLAttributes<HTMLLabelElement>, "color">;

const DropdownToggle = ({
  children,
  className,
  ...props
}: DropdownToggleProps) => {
  return (
    <label className={className} {...props}>
      {children}
    </label>
  );
};

type DropdownProps = HTMLAttributes<HTMLDivElement> & {
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
        className={cn(
          "dui-dropdown",
          {
            "dui-dropdown-left": horizontal === "left",
            "dui-dropdown-center": horizontal === "center",
            "dui-dropdown-right": horizontal === "right",
          },
          {
            "dui-dropdown-top": vertical === "top",
            "dui-dropdown-middle": vertical === "middle",
            "dui-dropdown-end": vertical === "end",
          },
          hover && "dui-dropdown-hover",
          open && "dui-dropdown-open",
          className,
        )}
      >
        {children}
      </div>
    );
  },
);

Dropdown.displayName = "Dropdown";

/** @deprecated  Please use 'Popover' instead*/
const DropdownCompound = Object.assign(Dropdown, {
  Menu: DropdownMenu,
  Item: DropdownItem,
  Toggle: DropdownToggle,
});

export { DropdownCompound as Dropdown };
export type { DropdownProps, DropdownMenuProps, DropdownItemProps };
