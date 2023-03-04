"use client";

import clsx from "clsx";

import { useBoolean } from "@/hooks/useBoolean";

import { NavigationMenu } from "../components/NavigationMenu";

import { SideNavBrand } from "./components/SideNavBrand";

const SideNav = () => {
  const [navOpen, { toggle: toggleSideNav }] = useBoolean({
    initialVal: false,
  });

  return (
    <div
      style={{
        width: navOpen ? 200 : 66,
      }}
      className={clsx(
        "h-[96%]  / grid grid-rows-[auto_1fr_auto]",
        "ml-4 my-auto / bg-base-200 / rounded-box / transition-all ease-in-out",
      )}
    >
      {/* Top section */}
      <div className="p-2">
        <SideNavBrand navOpen={navOpen} onToggleClick={toggleSideNav} />
        <div className="divider m-0" />
      </div>

      {/* Scrollable menu items */}
      <NavigationMenu navOpen={navOpen} className="pt-2 pb-8" />
    </div>
  );
};

export { SideNav };
