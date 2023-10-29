import { type HTMLAttributes } from "react";

import { cn } from "@/utils/styles";

export type DropdownMenuProps = HTMLAttributes<HTMLUListElement>;

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

export { DropdownMenu };
