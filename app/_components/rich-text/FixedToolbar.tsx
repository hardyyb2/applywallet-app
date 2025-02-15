import React from "react";

import { cnM } from "@/utils/styles";

import {
  Toolbar,
  type ToolbarProps,
} from "../../../common/components/ds/Toolbar";

const FixedToolbar = ({ ref, className, ...props }: ToolbarProps) => {
  return (
    <Toolbar
      ref={ref}
      className={cnM(
        "border-base-content/20 sticky left-0 w-full justify-between overflow-x-auto rounded-t-lg border border-b-0 backdrop-blur-xs",
        "supports-backdrop-blur:bg-base-100/60 bg-base-100/95",
        className,
      )}
      {...props}
    />
  );
};
FixedToolbar.displayName = "FixedToolbar";

export { FixedToolbar };
