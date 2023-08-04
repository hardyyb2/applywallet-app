import { forwardRef, ReactNode } from "react";

import clsx from "clsx";

interface BaseLayoutBodyProps {
  children: ReactNode;
  className?: string;
}

const BaseLayoutBody = forwardRef<HTMLDivElement, BaseLayoutBodyProps>(
  ({ className, ...rest }, ref) => {
    const classes = clsx("h-full flex-1", className);

    return <main {...rest} className={classes} ref={ref} />;
  },
);

BaseLayoutBody.displayName = "BaseLayoutBody";

export { BaseLayoutBody };
