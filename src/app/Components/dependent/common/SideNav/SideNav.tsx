"use client";

import { useBoolean } from "@/hooks/useBoolean";
import clsx from "clsx";
import { LazyMotion, m } from "framer-motion";

import SideNavBrand from "./components/SideNavBrand";
import SideNavMenu from "./components/SideNavMenu";

const loadFeatures = () =>
  import("@/utils/framer.utils").then((res) => res.default);

const SideNav = () => {
  const [navOpen, { toggle: toggleSideNav }] = useBoolean({
    initialVal: false,
  });

  return (
    <LazyMotion features={loadFeatures} strict>
      <m.div
        animate={{
          width: navOpen ? 200 : 66,
        }}
        className={clsx(
          "h-[96%]  / grid grid-rows-[auto_1fr_auto]",
          "ml-4 my-auto / bg-base-200 / rounded-box ",
        )}
      >
        {/* Top section */}
        <div className="p-2">
          <SideNavBrand navOpen={navOpen} onToggleClick={toggleSideNav} />
          <div className="divider m-0" />
        </div>

        {/* Scrollable menu items */}
        <SideNavMenu navOpen={navOpen} />
      </m.div>
    </LazyMotion>
  );
};

export { SideNav };
