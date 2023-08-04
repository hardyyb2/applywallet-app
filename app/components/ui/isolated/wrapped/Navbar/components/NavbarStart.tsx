import { forwardRef } from "react";

import { NavbarSection, NavbarSectionProps } from "./NavbarSection";

const NavbarStart = forwardRef<
  HTMLDivElement,
  Omit<NavbarSectionProps, "section">
>((props, ref) => <NavbarSection {...props} section="start" ref={ref} />);

NavbarStart.displayName = "NavbarStart";

export { NavbarStart };
