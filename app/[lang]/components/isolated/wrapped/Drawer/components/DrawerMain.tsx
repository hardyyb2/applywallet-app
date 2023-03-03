import clsx from "clsx";
import { forwardRef, ReactNode } from "react";

interface DrawerMainProps {
  children: ReactNode;
  className?: string;
}

const DrawerMain = forwardRef<HTMLDivElement, DrawerMainProps>(
  ({ className, children, ...rest }, ref) => {
    const classes = clsx("drawer-content", className);

    return (
      <main {...rest} className={classes} ref={ref}>
        {children}
      </main>
    );
  },
);

DrawerMain.displayName = "DrawerMain";

export { DrawerMain };
