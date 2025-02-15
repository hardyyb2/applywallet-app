"use client";

import { Fragment } from "react";
import { usePathname } from "next/navigation";

import { ConditionalMatch } from "@dx-kit/react-conditional-match";
import { AnimatePresence, motion } from "motion/react";
import { useBoolean } from "react-use";

import { BottomNavigation } from "~/components/ds/BottomNavigation";
import { Flex } from "~/components/ds/Flex";

import { cnM } from "@/utils/styles";

import { NavBackdrop } from "../NavBackdrop";
import { NavigationMenu } from "../NavigationMenu";
import { BottomNavBar } from "./BottomNavBar";

const { Render } = ConditionalMatch;
interface BottomNavProps {
  className?: string;
}

const MotionBottomNavigation = motion.create(BottomNavigation);

const BottomNav = ({ className = "" }: BottomNavProps) => {
  const pathName = usePathname();
  const [showFullBottomNav, toggleShowFullBottomNav] = useBoolean(false);

  return (
    <Fragment>
      <NavBackdrop
        visible={showFullBottomNav}
        toggleVisible={toggleShowFullBottomNav}
        className="z-10"
      />
      <MotionBottomNavigation
        animate={{
          height: showFullBottomNav ? "66%" : "4rem",
        }}
        className={cnM(
          "mb-2xs rounded-box bg-opacity-60 z-20 mx-auto w-[96%] overflow-hidden backdrop-blur-xs",
          className,
        )}
      >
        <AnimatePresence>
          <ConditionalMatch fallback={null}>
            <Render when={showFullBottomNav}>
              <Flex>
                <NavigationMenu
                  navOpen
                  onNavItemClick={toggleShowFullBottomNav}
                  className="p-3xs"
                />
                <button
                  onClick={toggleShowFullBottomNav}
                  aria-label="close"
                  className="border-primary border-opacity-80 text-primary border-t py-3"
                >
                  close
                </button>
              </Flex>
            </Render>
            <Render when={!showFullBottomNav}>
              <BottomNavBar
                pathName={pathName}
                toggleBottomNav={toggleShowFullBottomNav}
              />
            </Render>
          </ConditionalMatch>
        </AnimatePresence>
      </MotionBottomNavigation>
    </Fragment>
  );
};

export { BottomNav };
