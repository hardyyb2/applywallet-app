import { forwardRef, HTMLAttributes } from "react";

import { cn } from "@/_utils/styles.utils";

export type BottomNavigationLabelProps = HTMLAttributes<HTMLSpanElement>;

const BottomNavigationLabel = forwardRef<
  HTMLSpanElement,
  BottomNavigationLabelProps
>(({ children, className, ...props }, ref): JSX.Element => {
  return (
    <span {...props} className={cn(className)} ref={ref}>
      {children}
    </span>
  );
});

BottomNavigationLabel.displayName = "BottomNavigationLabel";

export { BottomNavigationLabel };
