import { forwardRef, HTMLAttributes } from "react";

import clsx from "clsx";

import { NavbarCenter } from "./components/NavbarCenter";
import { NavbarEnd } from "./components/NavbarEnd";
import { NavbarStart } from "./components/NavbarStart";

export type NavbarProps = HTMLAttributes<HTMLDivElement>;

const Navbar = forwardRef<HTMLDivElement, NavbarProps>(
  ({ children, className, ...props }, ref): JSX.Element => {
    const classes = clsx("navbar", className);

    return (
      <div {...props} className={classes} ref={ref}>
        {children}
      </div>
    );
  },
);

Navbar.displayName = "Navbar";

const NavbarCompound = Object.assign(Navbar, {
  Start: NavbarStart,
  Center: NavbarCenter,
  End: NavbarEnd,
});

export { NavbarCompound as Navbar };
