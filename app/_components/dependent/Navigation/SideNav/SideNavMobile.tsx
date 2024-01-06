"use client";

import {
  Sheet,
  SheetContent,
  SheetOverlay,
  SheetPortal,
} from "~/components/ds/Sheet";

import { useBreakPoint } from "@/hooks/useBreakPoint";
import { useSideNavMobileStore } from "@/store/useSideNavMobile";

import { NavigationMenu } from "../NavigationMenu";
import { SideNavBrand } from "./SideNavBrand";

const SideNavMobile = () => {
  const { sideNavMobileOpen, toggleSideNavMobileOpen, setSideNavMobileOpen } =
    useSideNavMobileStore();
  const { isAboveLg } = useBreakPoint("lg");

  if (isAboveLg) {
    return null;
  }

  return (
    <Sheet open={sideNavMobileOpen} onOpenChange={setSideNavMobileOpen}>
      <SheetPortal>
        <SheetOverlay />
        <SheetContent
          side="left"
          showClose={false}
          onOpenAutoFocus={(e) => e.preventDefault()}
        >
          <div className="p-2 pb-0">
            <SideNavBrand navOpen onToggleClick={toggleSideNavMobileOpen} />
          </div>

          {/* Scrollable menu items */}
          <NavigationMenu
            navOpen
            className="pb-8 "
            onNavItemClick={toggleSideNavMobileOpen}
          />
        </SheetContent>
      </SheetPortal>
    </Sheet>
  );
};

export { SideNavMobile };
