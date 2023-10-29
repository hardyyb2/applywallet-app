import { forwardRef, type ReactNode } from "react";

import { cn } from "@/utils/styles";

interface BaseLayoutHeadProps {
  children: ReactNode;
  className?: string;
}

const BaseLayoutHead = forwardRef<HTMLDivElement, BaseLayoutHeadProps>(
  ({ className, ...rest }, ref) => {
    const classes = cn(className);

    return <header {...rest} className={classes} ref={ref} />;
  },
);

BaseLayoutHead.displayName = "BaseLayoutHead";

export { BaseLayoutHead };
