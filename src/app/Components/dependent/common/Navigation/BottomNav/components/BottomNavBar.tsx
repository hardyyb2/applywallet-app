import Link from "next/link";
import { Fragment } from "react";

import { BottomNavigation, Button } from "@/components/isolated/wrapped";

import { navItems } from "../../navigation.utils";

interface BottomNavBarProps {
  pathName?: string | null;
  toggleBottomNav: () => void;
  className?: string;
}

const BottomNavBar = ({
  pathName = "/",
  toggleBottomNav,
}: BottomNavBarProps) => {
  return (
    <Fragment>
      {navItems.slice(0, 3).map((item) => {
        const active = pathName === item.link;

        return (
          <Link href={item.link} key={item.key ?? item.link}>
            <Button
              color={active ? "primary" : "ghost"}
              className=" w-[90%] / flex flex-col "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
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
              <BottomNavigation.Label className="lowercase text-xs">
                {item.label}
              </BottomNavigation.Label>
            </Button>
          </Link>
        );
      })}

      <Link href="">
        <Button color="ghost" className="w-[90%]" onClick={toggleBottomNav}>
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
    </Fragment>
  );
};

export { BottomNavBar };
