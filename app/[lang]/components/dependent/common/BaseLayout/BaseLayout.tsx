import clsx from "clsx";
import { forwardRef, ReactNode } from "react";

import { BaseLayoutBody } from "./components/BaseLayoutBody";
import { BaseLayoutHead } from "./components/BaseLayoutHead";

export interface BaseLayoutProps {
  children: ReactNode;
  className?: string;
}

const BaseLayout = forwardRef<HTMLDivElement, BaseLayoutProps>(({ children, className = "", ...rest }, ref) => {
  const classes = clsx("flex flex-col", className);

  return (
    <div {...rest} className={classes} ref={ref}>
      {children}
    </div>
  );
});

BaseLayout.displayName = "BaseLayout";

const BaseLayoutCompound = Object.assign(BaseLayout, {
  Head: BaseLayoutHead,
  Body: BaseLayoutBody,
});

export { BaseLayoutCompound as BaseLayout };
