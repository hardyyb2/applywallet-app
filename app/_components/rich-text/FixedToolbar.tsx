import React from "react";

import { cnM } from "@/utils/styles";

import {
  Toolbar,
  type ToolbarProps,
} from "../../../common/components/isolated/Toolbar";

const FixedToolbar = React.forwardRef<HTMLDivElement, ToolbarProps>(
  ({ className, ...props }: ToolbarProps, ref) => {
    return (
      <Toolbar
        ref={ref}
        className={cnM(
          "sticky left-0 z-50 w-full justify-between overflow-x-auto rounded-t-lg border border-b-0 border-base-content/20 backdrop-blur",
          "supports-backdrop-blur:bg-base-100/60 bg-base-100/95",
          className,
        )}
        {...props}
      />
    );
  },
);
FixedToolbar.displayName = "FixedToolbar";

export { FixedToolbar };
