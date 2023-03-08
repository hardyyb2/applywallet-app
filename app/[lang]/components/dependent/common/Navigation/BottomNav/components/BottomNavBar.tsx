import clsx from "clsx";
import { Fragment, useMemo } from "react";

import { Flex } from "@/components/isolated/common";
import { BottomNavigation, Button } from "@/components/isolated/wrapped";
import { getLinkWithLocale } from "@/utils/routes.utils";
import { HomeIcon, MenuIcon } from "public/images";

import { bottomNavDisplayOptions } from "../../navigation.utils";
import Link from "next/link";

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
                "flex flex-col ",
                active && "text-primary active",
                "hover:bg-transparent",
              )}
              tabIndex={-1}
            >
              <HomeIcon />
              <BottomNavigation.Label className="lowercase text-xs">
                {item.label}
              </BottomNavigation.Label>
            </Button>
          </Link>
        );
      })}

      <Flex component="div">
        <Button
          color="ghost"
          className="w-[90%] indicator"
          onClick={toggleBottomNav}
          aria-label="menu-button"
        >
          {menuIconHasIndicator ? (
            <span
              className={clsx(
                "indicator-item badge badge-xs badge-primary",
                "left-1/2 top-[20%]",
              )}
            />
          ) : null}

          <MenuIcon className="h-5 w-5" />
        </Button>
      </Flex>
    </Fragment>
  );
};

export { BottomNavBar };
