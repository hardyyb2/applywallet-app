import { forwardRef } from "react";

import { NavbarSection, NavbarSectionProps } from "./NavbarSection";

const NavbarCenter = forwardRef<
  HTMLDivElement,
  Omit<NavbarSectionProps, "section">
>((props, ref) => <NavbarSection {...props} section="center" ref={ref} />);

NavbarCenter.displayName = "NavbarCenter";

export { NavbarCenter };
