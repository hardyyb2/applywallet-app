import clsx from "clsx";
import { forwardRef, ReactNode } from "react";

interface BaseLayoutHeadProps {
  children: ReactNode;
  className?: string;
}

const BaseLayoutHead = forwardRef<HTMLDivElement, BaseLayoutHeadProps>(
  ({ className, ...rest }, ref) => {
    const classes = clsx(className);

    return <header {...rest} className={classes} ref={ref} />;
  },
);

BaseLayoutHead.displayName = "BaseLayoutHead";

export { BaseLayoutHead };
