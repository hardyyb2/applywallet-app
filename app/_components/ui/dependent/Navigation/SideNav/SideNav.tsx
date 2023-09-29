"use client";

import { useBoolean } from "@/_hooks/useBoolean";
import { cn } from "@/_utils/styles.utils";
import { m } from "framer-motion";

import { NavigationMenu } from "../components/NavigationMenu";
import { SideNavBrand } from "./components/SideNavBrand";

const SideNav = () => {
  const [navOpen, { toggle: toggleSideNav }] = useBoolean();

  return (
    <m.div
      animate={{
        width: navOpen ? 240 : 72,
      }}
      className={cn(
        "grid h-[96%] grid-rows-[auto_1fr_auto]",
        "rounded-box my-auto ml-4 bg-base-200",
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
