import React from "react";

import { cnMerge } from "@/utils/styles";

import { Toolbar, type ToolbarProps } from "./Toolbar";

const FixedToolbar = React.forwardRef<HTMLDivElement, ToolbarProps>(
  ({ className, ...props }: ToolbarProps, ref) => {
    return (
      <Toolbar
        ref={ref}
        className={cnMerge(
          "sticky left-0 top-[57px] z-50 w-full justify-between overflow-x-auto rounded-t-lg border-b backdrop-blur",
          //color related
          "supports-backdrop-blur:bg-background/60 border-b-border bg-background/95 ",
          className,
        )}
        {...props}
      />
    );
  },
);
FixedToolbar.displayName = "FixedToolbar";

export { FixedToolbar };
