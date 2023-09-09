import { Fragment } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Flex, Typography } from "app/components/ui/isolated/common";
import { getLinkWithLocale } from "app/utils/routes.utils";

import { Icons } from "@/components/ui/isolated/wrapped/Icons";
import { cn } from "@/utils/styles.utils";

import { groupedNavItemsEntries } from "../navigation.utils";

interface NavigationMenuProps {
  navOpen: boolean;
  className?: string;
  onNavItemClick?: () => void;
}

const NavigationMenu = ({
  navOpen,
  className = "",
  onNavItemClick = () => null,
}: NavigationMenuProps) => {
  const pathName = usePathname();

  return (
    <Flex
      component="ul"
      wrap="nowrap"
      className={cn(
        "menu-compact menu  max-w-none",
        "h-full space-y-3 overflow-y-auto px-2",
        className,
      )}
    >
      {groupedNavItemsEntries.map(([group, items]) => {
        return (
          <Fragment key={group}>
            {navOpen && (
              <li className="menu-title">
                <Typography variant="subtitle2">{group}</Typography>
              </li>
            )}

            {items.map((item) => {
              const itemLinkWithLocale = getLinkWithLocale({
                link: item.link,
                pathName,
              });

              const active = itemLinkWithLocale === pathName;

              return (
                <li key={item.key ?? itemLinkWithLocale}>
                  <Link
                    href={itemLinkWithLocale}
                    className={cn("h-9 py-2 ", {
                      "active text-primary-content": active,
                    })}
                    onClick={onNavItemClick}
                  >
                    <Icons.CustomHome />
                    {navOpen ? (
                      <Typography
                        key={item.key}
                        variant="caption"
                        className="overflow-ellipsis"
                      >
                        {item.label}
                      </Typography>
                    ) : null}
                  </Link>
                </li>
              );
            })}
          </Fragment>
        );
      })}
    </Flex>
  );
};

export { NavigationMenu };
