import clsx from "clsx";
import Link from "next/link";
import { Fragment, useMemo } from "react";

import { Flex } from "@/components/isolated/common";
import { BottomNavigation, Button } from "@/components/isolated/wrapped";

import {
  bottomNavDisplayOptions,
  getLinkWithLocale,
} from "../../navigation.utils";

interface BottomNavBarProps {
  pathName?: string | null;
  toggleBottomNav: () => void;
}

const BottomNavBar = ({
  pathName = "/",
  toggleBottomNav,
}: BottomNavBarProps) => {
  // Only show indicator if the pathName lies inside the menu and not on the main navbar
  const menuIconHasIndicator = useMemo(
    () =>
      !bottomNavDisplayOptions.some((navItem) => {
        const itemLinkWithLocale = getLinkWithLocale({
          link: navItem.link,
          pathName,
        });

        return itemLinkWithLocale === pathName;
      }),
    [pathName],
  );

  return (
    <Fragment>
      {bottomNavDisplayOptions.slice(0, 3).map((item) => {
        const itemLinkWithLocale = getLinkWithLocale({
          link: item.link,
          pathName,
        });

        const active = itemLinkWithLocale === pathName;

        return (
          <Link href={itemLinkWithLocale} key={item.key ?? item.link}>
            <Button
              color="ghost"
              className={clsx(
                "w-[90%] / flex flex-col ",
                active && "text-primary active",
                "hover:bg-transparent",
              )}
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

      <Flex component="div" className="">
        <Button
          color="ghost"
          className="w-[90%] indicator"
          onClick={toggleBottomNav}
        >
          {menuIconHasIndicator ? (
            <span
              className={clsx(
                "indicator-item badge badge-xs badge-primary",
                "left-1/2 top-[20%]",
              )}
            />
          ) : null}

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
      </Flex>
    </Fragment>
  );
};

export { BottomNavBar };
