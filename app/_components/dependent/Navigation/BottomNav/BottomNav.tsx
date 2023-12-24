"use client";

import { Fragment } from "react";
import { usePathname } from "next/navigation";

import { ConditionalMatch } from "@dx-kit/react-conditional-match";
import { AnimatePresence, m } from "framer-motion";
import { useBoolean } from "react-use";

import { BottomNavigation } from "~/components/isolated/BottomNavigation";
import { Flex } from "~/components/isolated/Flex";

import { cn } from "@/utils/styles";

import { NavigationMenu } from "../NavigationMenu";
import { BottomNavBackdrop } from "./BottomNavBackdrop";
import { BottomNavBar } from "./BottomNavBar";

const { Render } = ConditionalMatch;
interface BottomNavProps {
  className?: string;
}

const MotionBottomNavigation = m(BottomNavigation);

const BottomNav = ({ className = "" }: BottomNavProps) => {
  const pathName = usePathname();
  const [showFullBottomNav, toggleShowFullBottomNav] = useBoolean(false);

  return (
    <Fragment>
      <BottomNavBackdrop
        visible={showFullBottomNav}
        toggleVisible={toggleShowFullBottomNav}
        className="z-10"
      />
      <MotionBottomNavigation
        animate={{
          height: showFullBottomNav ? "66%" : "4rem",
        }}
        className={cn(
          "z-20 mx-auto mb-4 w-[96%] overflow-hidden rounded-box bg-opacity-60 backdrop-blur",
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
                  className="p-4"
                />
                <button
                  onClick={toggleShowFullBottomNav}
                  aria-label="close"
                  className="border-t border-primary border-opacity-80 py-4 text-primary"
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
