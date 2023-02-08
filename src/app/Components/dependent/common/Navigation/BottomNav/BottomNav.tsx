"use client";

import clsx from "clsx";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

import { BottomNavigation } from "@/components/isolated/wrapped";
import { useBoolean } from "@/hooks/useBoolean";

import SideNavMenu from "../SideNav/components/SideNavMenu";

import { BottomNavBar } from "./components/BottomNavBar";
import { BottomNavMenu } from "./components/BottomNavMenu";

interface BottomNavProps {
  className?: string;
}

const BottomNav = ({ className = "" }: BottomNavProps) => {
  const pathName = usePathname();
  const [showFullBottomNav, { toggle: toggleShowFullBottomNav }] = useBoolean({
    initialVal: false,
  });

  return (
    <Fragment>
      <div
        className={clsx(
          "fixed bg-gray-800 bg-opacity-50 backdrop-blur-[2px] inset-0 overflow-y-auto h-full w-full",
          showFullBottomNav ? "block" : "hidden",
        )}
        role="dialog"
        aria-hidden="true"
        onClick={toggleShowFullBottomNav}
      />
      <BottomNavigation
        className={clsx(
          "w-[96%] / mb-4 mx-auto / rounded-box overflow-hidden",
          showFullBottomNav ? "h-2/3 py-8" : "h-16 px-2 ",
          className,
        )}
      >
        {showFullBottomNav ? (
          <BottomNavMenu />
        ) : (
          <BottomNavBar
            pathName={pathName}
            toggleBottomNav={toggleShowFullBottomNav}
          />
        )}
      </BottomNavigation>
    </Fragment>
  );
};

export { BottomNav };
