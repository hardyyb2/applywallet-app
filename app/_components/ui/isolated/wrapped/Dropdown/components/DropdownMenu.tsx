import { HTMLAttributes } from "react";

import { cn } from "@/_utils/styles.utils";

export type DropdownMenuProps = HTMLAttributes<HTMLUListElement>;

const DropdownMenu = ({ className, ...props }: DropdownMenuProps) => {
  return (
    <ul
      {...props}
      tabIndex={0}
      className={cn(
        "dropdown-content menu rounded-box bg-base-100 p-2 shadow",
        className,
      )}
    />
  );
};

export { DropdownMenu };
