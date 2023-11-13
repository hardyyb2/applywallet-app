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
        "menu dropdown-content rounded-box bg-base-100 p-2 shadow",
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
export type { DropdownProps, DropdownMenuProps, DropdownItemProps };
