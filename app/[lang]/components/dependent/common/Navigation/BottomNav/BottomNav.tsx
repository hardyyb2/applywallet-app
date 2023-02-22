"use client";

import clsx from "clsx";
import { AnimatePresence, LazyMotion, m } from "framer-motion";
import { usePathname } from "next/navigation";

import { Flex } from "@/components/isolated/common";
import { BottomNavigation } from "@/components/isolated/wrapped";
import { useBoolean } from "@/hooks/useBoolean";

import { NavigationMenu } from "../components/NavigationMenu";

import { BottomNavBackdrop } from "./components/BottomNavBackdrop";
import { BottomNavBar } from "./components/BottomNavBar";

const loadFeatures = () =>
  import("@/utils/framer.utils").then((module) => module.default);

const MotionBottomNavigation = m(BottomNavigation);

interface BottomNavProps {
  className?: string;
}

const BottomNav = ({ className = "" }: BottomNavProps) => {
  const pathName = usePathname();
  const [showFullBottomNav, { toggle: toggleShowFullBottomNav }] = useBoolean({
    initialVal: false,
  });

  return (
    <LazyMotion features={loadFeatures} strict>
      <BottomNavBackdrop
        visible={showFullBottomNav}
        toggleVisible={toggleShowFullBottomNav}
        className="z-10"
      />
      <MotionBottomNavigation
        animate={{
          height: showFullBottomNav ? "66%" : "4rem",
        }}
        className={clsx(
          "w-[96%] / mb-4 mx-auto / z-20 rounded-box overflow-hidden backdrop-blur bg-opacity-60",
          className,
        )}
      >
        <AnimatePresence>
          {showFullBottomNav ? (
            <Flex>
              <NavigationMenu
                navOpen
                onNavItemClick={toggleShowFullBottomNav}
                className="p-4"
              />
              <button
                onClick={toggleShowFullBottomNav}
                aria-label="close"
                className="py-3 / text-primary / border-t border-primary border-opacity-80"
              >
                close
              </button>
            </Flex>
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
