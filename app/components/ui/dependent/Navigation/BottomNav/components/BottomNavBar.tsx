import { Fragment, useMemo } from "react";
import Link from "next/link";

import { Flex } from "app/components/ui/isolated/common";
import { BottomNavigation, Button } from "app/components/ui/isolated/wrapped";
import { getLinkWithLocale } from "app/utils/routes.utils";

import { Icons } from "@/components/ui/isolated/wrapped/Icons";
import { cn } from "@/utils/styles.utils";

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
          <Link
            href={itemLinkWithLocale}
            key={item.key ?? item.link}
            className={cn(active && "active text-primary", "bg-transparent")}
          >
            <Icons.CustomHome />
            <BottomNavigation.Label className="text-xs lowercase">
              {item.label}
            </BottomNavigation.Label>
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
              className={cn(
                "badge badge-primary badge-xs indicator-item",
                "left-1/2 top-[20%]",
              )}
            />
          ) : null}

          <Icons.AlignJustify className="h-5 w-5" />
        </Button>
      </Flex>
    </Fragment>
  );
};

export { BottomNavBar };
