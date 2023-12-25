"use client";

import { Fragment } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { AnimatePresence, m } from "framer-motion";

import { useSideNavMobileStore } from "@/store/useSideNavMobile";
import { cn, cnM } from "@/utils/styles";

import { NavigationMenu } from "../NavigationMenu";
import { SideNavBrand } from "./SideNavBrand";

type SideNavMobileProps = {
  className?: string;
};

const SideNavMobile = ({ className }: SideNavMobileProps) => {
  const { sideNavMobileOpen, toggleSideNavMobileOpen } =
    useSideNavMobileStore();

  return (
    <Fragment>
      <AnimatePresence>
        {sideNavMobileOpen && (
          <m.aside
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            className={cnM(
              "absolute inset-0 z-[100] grid h-full grid-rows-[auto_1fr_auto]",
              "bg-base-200",
              className,
            )}
          >
            {/* Top section */}
            <div className="p-2">
              <SideNavBrand navOpen onToggleClick={toggleSideNavMobileOpen} />
              <div className="divider m-0" />
            </div>

            {/* Scrollable menu items */}
            <NavigationMenu navOpen className="pb-8 pt-2" />
          </m.aside>
        )}
      </AnimatePresence>
    </Fragment>
  );
};

export { SideNavMobile };
