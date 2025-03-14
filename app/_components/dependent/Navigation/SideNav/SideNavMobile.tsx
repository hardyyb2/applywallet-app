"use client";

import { useRef } from "react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetOverlay,
  SheetPortal,
  SheetTitle,
} from "~/components/ds/Sheet";
import { VisuallyHidden } from "~/components/ds/VisuallyHidden";

import { useBreakPoint } from "@/hooks/useBreakPoint";
import { useSideNavMobileStore } from "@/store/useSideNavMobile";

import { NavigationMenu } from "../NavigationMenu";
import { SideNavBrand } from "./SideNavBrand";

const SideNavMobile = () => {
  const { sideNavMobileOpen, toggleSideNavMobileOpen, setSideNavMobileOpen } =
    useSideNavMobileStore();
  const { isAboveLg } = useBreakPoint("lg");
  const selectedItemRef = useRef<HTMLAnchorElement>(null);

  const handleOpenAutoFocus = (e: Event) => {
    e?.preventDefault();

    selectedItemRef.current?.focus();
  };

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
          onOpenAutoFocus={handleOpenAutoFocus}
        >
          <VisuallyHidden asChild>
            <SheetTitle>applywallet sidenav</SheetTitle>
          </VisuallyHidden>
          <VisuallyHidden asChild>
            <SheetDescription>navigation menu for applywallet</SheetDescription>
          </VisuallyHidden>
          <div className="p-2 pb-0">
            <SideNavBrand navOpen onToggleClick={toggleSideNavMobileOpen} />
          </div>

          {/* Scrollable menu items */}
          <NavigationMenu
            navOpen
            className="pb-8"
            onNavItemClick={toggleSideNavMobileOpen}
            selectedItemRef={selectedItemRef}
          />
        </SheetContent>
      </SheetPortal>
    </Sheet>
  );
};

export { SideNavMobile };
