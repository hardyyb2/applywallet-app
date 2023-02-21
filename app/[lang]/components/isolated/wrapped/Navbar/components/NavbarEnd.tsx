import { forwardRef } from "react";

import { NavbarSection, NavbarSectionProps } from "./NavbarSection";

const NavbarEnd = forwardRef<HTMLDivElement, Omit<NavbarSectionProps, "section">>((props, ref) => (
  <NavbarSection {...props} section="end" ref={ref} />
));

NavbarEnd.displayName = "NavbarEnd";

export { NavbarEnd };

console.log("[RENDER] components/isolated/wrapped/Navbar/components/NavbarEnd.tsx");