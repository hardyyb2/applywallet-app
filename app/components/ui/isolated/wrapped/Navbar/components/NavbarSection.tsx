import { forwardRef } from "react";

import clsx from "clsx";

import { NavbarProps } from "../Navbar";

export type NavbarSectionProps = NavbarProps & {
  section: "start" | "center" | "end";
};

const NavbarSection = forwardRef<HTMLDivElement, NavbarSectionProps>(
  ({ children, section, className, style }, ref): JSX.Element => {
    const classes = clsx(
      {
        "navbar-start": section === "start",
        "navbar-center": section === "center",
        "navbar-end": section === "end",
      },
      {
        "flex-1": section !== "center",
      },
      className,
    );

    return (
      <div className={classes} style={style} ref={ref}>
        {children}
      </div>
    );
  },
);

NavbarSection.displayName = "NavbarSection";

export { NavbarSection };
