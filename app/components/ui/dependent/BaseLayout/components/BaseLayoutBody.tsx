import { forwardRef, ReactNode } from "react";

import { cn } from "@/utils/styles.utils";

interface BaseLayoutBodyProps {
  children: ReactNode;
  className?: string;
}

const BaseLayoutBody = forwardRef<HTMLDivElement, BaseLayoutBodyProps>(
  ({ className, ...rest }, ref) => {
    const classes = cn("h-full flex-1", className);

    return <main {...rest} className={classes} ref={ref} />;
  },
);

BaseLayoutBody.displayName = "BaseLayoutBody";

export { BaseLayoutBody };
