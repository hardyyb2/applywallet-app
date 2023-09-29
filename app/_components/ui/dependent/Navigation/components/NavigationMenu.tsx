import { Fragment } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Flex, Typography } from "@/_components/ui/isolated/common";
import { getLinkWithLocale } from "@/_utils/routes.utils";
import { cn } from "@/_utils/styles.utils";

import { Icons } from "@/components/ui/isolated/wrapped/Icons";

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
              const ItemIcon = item.icon;

              return (
                <li key={item.key ?? itemLinkWithLocale}>
                  <Link
                    href={itemLinkWithLocale}
                    className={cn("py-2 ", {
                      "active text-primary-content": active,
                    })}
                    onClick={onNavItemClick}
                  >
                    <ItemIcon />
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
