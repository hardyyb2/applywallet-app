"use client";

import clsx from "clsx";
import { AnimatePresence, LazyMotion, m } from "framer-motion";
import { usePathname } from "next/navigation";

import { BottomNavigation } from "@/components/isolated/wrapped";
import { useBoolean } from "@/hooks/useBoolean";

import { NavigationMenu } from "../components/NavigationMenu";

import { BottomNavBar } from "./components/BottomNavBar";

interface BottomNavProps {
  className?: string;
}

const loadFeatures = () =>
  import("@/utils/framer.utils").then((res) => res.default);

const MotionBottomNavigation = m(BottomNavigation);

const BottomNav = ({ className = "" }: BottomNavProps) => {
  const pathName = usePathname();
  const [showFullBottomNav, { toggle: toggleShowFullBottomNav }] = useBoolean({
    initialVal: false,
  });

  return (
    <LazyMotion features={loadFeatures} strict>
      <div
        className={clsx(
          "fixed bg-gray-800 bg-opacity-50 backdrop-blur-[2px] inset-0 overflow-y-auto h-full w-full",
          showFullBottomNav ? "block" : "hidden",
        )}
        role="dialog"
        aria-hidden="true"
        onClick={toggleShowFullBottomNav}
      />
      <MotionBottomNavigation
        animate={{
          height: showFullBottomNav ? "66%" : "4rem",
        }}
        className={clsx(
          "w-[96%] / mb-4 mx-auto / rounded-box overflow-hidden",
          className,
        )}
      >
        <AnimatePresence>
          {showFullBottomNav ? (
            <NavigationMenu navOpen />
          ) : (
            <BottomNavBar
              pathName={pathName}
              toggleBottomNav={toggleShowFullBottomNav}
            />
          )}
        </AnimatePresence>
      </MotionBottomNavigation>
    </LazyMotion>
  );
};

export { BottomNav };
