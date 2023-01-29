import clsx from "clsx";
import { forwardRef, HTMLAttributes } from "react";

import { DrawerMain } from "./components/DrawerMain";
import { DrawerSide } from "./components/DrawerSide";

export type DrawerProps = HTMLAttributes<HTMLDivElement> & {
  open?: boolean;
  mobile?: boolean;
  end?: boolean;
  className?: string;
  toggleClassName?: string;
};

const Drawer = forwardRef<HTMLDivElement, DrawerProps>(
  ({ children, open, mobile, end, className, toggleClassName, ...props }, ref) => {
    const classes = clsx(
      "drawer",
      {
        "drawer-mobile": mobile,
        "drawer-end": end,
      },
      className,
    );

    return (
      <div aria-expanded={open} className={classes} ref={ref} {...props}>
        <input
          id="drawer-toggle"
          type="checkbox"
          className={clsx("drawer-toggle", toggleClassName)}
          checked={open}
          readOnly
          aria-label="Open/Close Drawer"
        />
        {children}
      </div>
    );
  },
);

Drawer.displayName = "Drawer";

const DrawerCompound = Object.assign(Drawer, {
  Side: DrawerSide,
  Main: DrawerMain,
});

export { DrawerCompound as Drawer };
