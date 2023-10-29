"use client";

import { m } from "framer-motion";
import { useBoolean } from "react-use";

import { cn } from "@/utils/styles";

import { NavigationMenu } from "../NavigationMenu";
import { SideNavBrand } from "./SideNavBrand";

const SideNav = () => {
  const [navOpen, toggleSideNav] = useBoolean(false);

  return (
    <m.div
      animate={{
        width: navOpen ? 240 : 72,
      }}
      className={cn(
        "grid h-[96%] grid-rows-[auto_1fr_auto]",
        "rounded-box my-auto ml-xs bg-base-200",
      )}
    >
      {/* Top section */}
      <div className="p-2">
        <SideNavBrand navOpen={navOpen} onToggleClick={toggleSideNav} />
        <div className="divider m-0" />
      </div>

      {/* Scrollable menu items */}
      <NavigationMenu navOpen={navOpen} className="pb-8 pt-2" />
    </m.div>
  );
};

export { SideNav };
