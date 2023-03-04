"use client";

import { ConditionalMatch } from "@dx-kit/react-conditional-match";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

import { Flex } from "@/components/isolated/common";
import { BottomNavigation } from "@/components/isolated/wrapped";
import { useBoolean } from "@/hooks/useBoolean";

import { NavigationMenu } from "../components/NavigationMenu";

import { BottomNavBackdrop } from "./components/BottomNavBackdrop";
import { BottomNavBar } from "./components/BottomNavBar";

const { Render } = ConditionalMatch;
interface BottomNavProps {
  className?: string;
}

const BottomNav = ({ className = "" }: BottomNavProps) => {
  const pathName = usePathname();
  const [parent] = useAutoAnimate();
  const [showFullBottomNav, { toggle: toggleShowFullBottomNav }] = useBoolean({
    initialVal: false,
  });

  return (
    <Fragment>
      <BottomNavBackdrop
        visible={showFullBottomNav}
        toggleVisible={toggleShowFullBottomNav}
        className="z-10"
      />
      <BottomNavigation
        ref={parent}
        style={{
          height: showFullBottomNav ? "66%" : "4rem",
        }}
        className={clsx(
          "w-[96%] / mb-4 mx-auto / z-20 rounded-box overflow-hidden backdrop-blur bg-opacity-60",
          "transition-all",
          className,
        )}
      >
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
                className="py-4 / text-primary / border-t border-primary border-opacity-80"
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
      </BottomNavigation>
    </Fragment>
  );
};

export { BottomNav };
