import { Fragment, useMemo } from "react";
import Link from "next/link";

import { BottomNavigation } from "~/components/isolated/BottomNavigation";
import { Button } from "~/components/isolated/Button";
import { Flex } from "~/components/isolated/Flex";
import { Icons } from "~/components/isolated/Icons";
import { getLinkWithLocale } from "~/utils/routes";

import { cn } from "@/utils/styles";

import { bottomNavDisplayOptions } from "../navigation.utils";

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
        const Icon = item.icon;

        return (
          <Link
            href={itemLinkWithLocale}
            key={item.key ?? item.link}
            className={cn(active && "active text-primary", "bg-transparent")}
          >
            <Icon />
            <BottomNavigation.Label className="caption-s">
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
                "badge indicator-item badge-primary badge-xs",
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
