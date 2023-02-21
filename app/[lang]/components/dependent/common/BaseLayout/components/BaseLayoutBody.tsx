import clsx from "clsx";
import { forwardRef, ReactNode } from "react";

interface BaseLayoutBodyProps {
  children: ReactNode;
  className?: string;
}

const BaseLayoutBody = forwardRef<HTMLDivElement, BaseLayoutBodyProps>(({ className, ...rest }, ref) => {
  const classes = clsx("flex-1 h-full", className);

  return <main {...rest} className={classes} ref={ref} />;
});

BaseLayoutBody.displayName = "BaseLayoutBody";

export { BaseLayoutBody };

console.log("[RENDER] components/dependent/common/BaseLayout/components/BaseLayoutBody.tsx");