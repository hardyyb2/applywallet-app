import { Fragment, useMemo } from "react";
import Link from "next/link";

import { BottomNavigation } from "~/components/ds/BottomNavigation";
import { Button } from "~/components/ds/Button";
import { Flex } from "~/components/ds/Flex";
import { Icons } from "~/components/ds/Icons";
import { Typography } from "~/components/ds/Typography";
import { getLinkWithLocale } from "~/utils/routes";

import { cn, cnM } from "@/utils/styles";

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
            className={cn(
              active && "d-active text-secondary",
              "bg-transparent",
            )}
          >
            <Icon className={cnM(active && "fill-current")} />
            <BottomNavigation.Label>
              <Typography variant="caption-s">{item.label}</Typography>
            </BottomNavigation.Label>
          </Link>
        );
      })}

      <Flex component="div">
        <Button
          color="ghost"
          className="d-indicator w-[90%]"
          onClick={toggleBottomNav}
          aria-label="menu-button"
        >
          {menuIconHasIndicator ? (
            <span
              className={cn(
                "d-badge d-indicator-item d-badge-secondary d-badge-xs",
                "left-1/2 top-[20%]",
              )}
            />
          ) : null}

          <Icons.AlignJustify
            className={cnM(
              "h-5 w-5",
              menuIconHasIndicator && "stroke-secondary",
            )}
          />
        </Button>
      </Flex>
    </Fragment>
  );
};

export { BottomNavBar };
