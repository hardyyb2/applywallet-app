"use client";

import { BottomNavigation } from "@/components/isolated/wrapped";
import { useBoolean } from "@/hooks/useBoolean";
import clsx from "clsx";
import { usePathname } from "next/navigation";

import { BottomNavBar } from "./components/BottomNavBar";
import { BottomNavMenu } from "./components/BottomNavMenu";

interface BottomNavProps {
  className?: string;
}

const BottomNav = ({ className = "" }: BottomNavProps) => {
  const pathName = usePathname();
  const [showFullBottomNav, { toggle: toggleShowFullBottomNav }] = useBoolean({
    initialVal: false,
  });

  return (
    <BottomNavigation
      className={clsx(
        "w-[96%] / mb-4 mx-auto px-2 / rounded-box overflow-hidden",
        showFullBottomNav ? "h-2/3" : "h-20",
        className,
      )}
    >
      {showFullBottomNav ? (
        <BottomNavMenu />
      ) : (
        <BottomNavBar
          pathName={pathName}
          toggleBottomNav={toggleShowFullBottomNav}
        />
      )}
    </BottomNavigation>
  );
};

export { BottomNav };
