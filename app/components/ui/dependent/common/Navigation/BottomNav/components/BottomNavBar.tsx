import clsx from "clsx";
import Link from "next/link";
import { Fragment, useMemo } from "react";

import { Flex } from "app/components/ui/isolated/common";
import { BottomNavigation, Button } from "app/components/ui/isolated/wrapped";
import { getLinkWithLocale } from "app/utils/routes.utils";
import { HomeIcon, MenuIcon } from "public/images/icons";

import { bottomNavDisplayOptions } from "../../navigation.utils";

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
                active && "active text-primary",
                "hover:bg-transparent",
              )}
              tabIndex={-1}
            >
              <HomeIcon />
              <BottomNavigation.Label className="text-xs lowercase">
                {item.label}
              </BottomNavigation.Label>
            </Button>
          </Link>
        );
      })}

      <Flex component="div">
        <Button
          color="ghost"
          className="indicator w-[90%]"
          onClick={toggleBottomNav}
          aria-label="menu-button"
        >
          {menuIconHasIndicator ? (
            <span
              className={clsx(
                "badge-primary badge badge-xs indicator-item",
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
