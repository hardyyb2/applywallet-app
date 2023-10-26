import { forwardRef, type ReactNode } from "react";

import { cn } from "@/utils/styles.utils";

import { BaseLayoutBody } from "./BaseLayoutBody";
import { BaseLayoutHead } from "./BaseLayoutHead";

export interface BaseLayoutProps {
  children: ReactNode;
  className?: string;
}

const BaseLayout = forwardRef<HTMLDivElement, BaseLayoutProps>(
  ({ children, className = "", ...rest }, ref) => {
    const classes = cn("flex flex-col", className);

    return (
      <div {...rest} className={classes} ref={ref}>
        {children}
      </div>
    );
  },
);

BaseLayout.displayName = "BaseLayout";

const BaseLayoutCompound = Object.assign(BaseLayout, {
  Head: BaseLayoutHead,
  Body: BaseLayoutBody,
});

export { BaseLayoutCompound as BaseLayout };
