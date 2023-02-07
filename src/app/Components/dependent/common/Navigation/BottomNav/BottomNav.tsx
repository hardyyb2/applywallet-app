"use client";

import { BottomNavigation, Button } from "@/components/isolated/wrapped";
import { useBoolean } from "@/hooks/useBoolean";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { navItems } from "../navigation.utils";

interface BottomNavProps {
  className?: string;
}

const BottomNav = ({ className = "" }: BottomNavProps) => {
  const pathName = usePathname();
  const [showAllOptions, { toggle: toggleShowAllOptions }] = useBoolean({
    initialVal: false,
  });

  const displayedMenuItems = showAllOptions ? navItems : navItems.slice(0, 3);

  return (
    <BottomNavigation
      className={clsx(
        "w-[96%] / mb-4 mx-auto / rounded-box overflow-hidden",
        className,
      )}
    >
      {displayedMenuItems.map((item) => {
        const active = pathName === item.link;

        return (
          <Link href={item.link} key={item.key ?? item.link}>
            <Button color={active ? "primary" : "ghost"} className="w-[90%]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </Button>
          </Link>
        );
      })}

      <Link href="">
        <Button
          color="ghost"
          className="w-[90%]"
          onClick={toggleShowAllOptions}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-5 w-5"
          >
            <rect x="0" y="16" fill="currentColor" width="24" height="2" />
            <rect x="0" y="8" fill="currentColor" width="24" height="2" />
            <rect x="0" y="0" fill="currentColor" width="24" height="2" />
          </svg>
        </Button>
      </Link>
    </BottomNavigation>
  );
};

export { BottomNav };
