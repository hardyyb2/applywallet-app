import type { ComponentProps } from "react";

import { cnM } from "@/utils/styles";

type NavBarStartProps = ComponentProps<"div">;

const NavBarStart = (props: NavBarStartProps) => {
  return (
    <nav {...props} className={cnM("d-navbar-start", props.className)}>
      {props.children}
    </nav>
  );
};

type NavBarCenterProps = ComponentProps<"div">;

const NavBarCenter = (props: NavBarCenterProps) => {
  return (
    <div {...props} className={cnM("d-navbar-center", props.className)}>
      {props.children}
    </div>
  );
};

type NavBarEndProps = ComponentProps<"div">;

const NavBarEnd = (props: NavBarEndProps) => {
  return (
    <div {...props} className={cnM("d-navbar-end", props.className)}>
      {props.children}
    </div>
  );
};

type NavBarProps = ComponentProps<"div">;

const NavBar = (props: NavBarProps) => {
  return (
    <div {...props} className={cnM("d-navbar", props.className)}>
      {props.children}
    </div>
  );
};

NavBar.Start = NavBarStart;
NavBar.Center = NavBarCenter;
NavBar.End = NavBarEnd;

export { NavBar };
