import clsx from "clsx";
import { forwardRef, HTMLAttributes } from "react";

export type BottomNavigationLabelProps = HTMLAttributes<HTMLSpanElement>;

const BottomNavigationLabel = forwardRef<
  HTMLSpanElement,
  BottomNavigationLabelProps
>(({ children, className, ...props }, ref): JSX.Element => {
  return (
    <span {...props} className={clsx("btm-nav-label", className)} ref={ref}>
      {children}
    </span>
  );
});

BottomNavigationLabel.displayName = "BottomNavigationLabel";

export default BottomNavigationLabel;
