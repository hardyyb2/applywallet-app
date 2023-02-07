"use client";

import { BottomNavigation, Button } from "@/components/isolated/wrapped";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { navItems } from "../navigation.utils";

interface BottomNavProps {
  className?: string;
}

const BottomNav = ({ className = "" }: BottomNavProps) => {
  const pathName = usePathname();

  return (
    <BottomNavigation
      className={clsx(
        "w-[96%] / mb-4 mx-auto / rounded-box overflow-hidden",
        className,
      )}
    >
      {navItems.map((item) => {
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
    </BottomNavigation>
  );
};

export { BottomNav };
