"use client";

import { motion } from "motion/react";
import { useBoolean } from "react-use";

import { Separator } from "~/components/ds/Separator";

import { cn } from "@/utils/styles";

import { NavigationMenu } from "../NavigationMenu";
import { SideNavBrand } from "./SideNavBrand";

const SideNav = () => {
  const [navOpen, toggleSideNav] = useBoolean(false);

  return (
    <motion.div
      initial={{
        width: 74,
      }}
      animate={{
        width: navOpen ? 240 : 74,
      }}
      className={cn(
        "grid h-full grid-rows-[auto_1fr_auto]",
        "border-r-[1px] border-base-content/40 bg-base-100",
      )}
    >
      {/* Top section */}
      <div className="p-2">
        <SideNavBrand navOpen={navOpen} onToggleClick={toggleSideNav} />
        <Separator />
      </div>

      {/* Scrollable menu items */}
      <NavigationMenu navOpen={navOpen} className="pb-8 pt-2" />
    </motion.div>
  );
};

export { SideNav };
