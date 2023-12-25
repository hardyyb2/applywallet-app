"use client";

import { Fragment } from "react";

import { AnimatePresence, motion, type DragHandlers } from "framer-motion";

import { Icons } from "~/components/ds/Icons";

import { useSideNavMobileStore } from "@/store/useSideNavMobile";
import { cnM } from "@/utils/styles";

import { NavigationMenu } from "../NavigationMenu";
import { SideNavBrand } from "./SideNavBrand";

type SideNavMobileProps = {
  className?: string;
};

const SideNavMobile = ({ className }: SideNavMobileProps) => {
  const { sideNavMobileOpen, toggleSideNavMobileOpen } =
    useSideNavMobileStore();

  const handleDragEnd: DragHandlers["onDragEnd"] = (_event, info) => {
    if (info.offset.x < -100) {
      toggleSideNavMobileOpen();
    }
  };

  return (
    <Fragment>
      <AnimatePresence>
        {sideNavMobileOpen && (
          <motion.aside
            drag="x"
            dragConstraints={{
              left: 0,
              right: 0,
            }}
            dragElastic={{
              left: 0.8,
              right: 0,
            }}
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ width: 0, opacity: 0 }}
            onDragEnd={handleDragEnd}
            className={cnM(
              "absolute inset-0 z-[100] grid h-full touch-none grid-rows-[auto_1fr_auto]",
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
            <NavigationMenu navOpen className="mr-4 pb-8 pt-2" />
          </motion.aside>
        )}
      </AnimatePresence>
    </Fragment>
  );
};

export { SideNavMobile };
