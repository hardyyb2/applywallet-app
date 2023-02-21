import clsx from "clsx";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Fragment } from "react";

import { Flex, Typography } from "@/components/isolated/common";

import { BaseScrollbar } from "../../BaseScrollbar";
import { getLinkWithLocale, groupedNavItemsEntries } from "../navigation.utils";

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
  const routes = useRouter();

  return (
    <BaseScrollbar>
      <Flex
        component="ul"
        wrap="nowrap"
        className={clsx(
          "menu menu-compact / prose prose-li:pl-0  prose-a:no-underline",
          "h-full / px-2 / overflow-y-auto",
          className,
        )}
      >
        {groupedNavItemsEntries.map(([group, items]) => {
          return (
            <Fragment key={group}>
              {navOpen && (
                <li className="menu-title">
                  <span>{group}</span>
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
                      className={clsx("h-9 py-2 ", {
                        "active text-primary-content": active,
                      })}
                      onClick={onNavItemClick}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
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
    </BaseScrollbar>
  );
};

export { NavigationMenu };

console.log("[RENDER] components/dependent/common/Navigation/components/NavigationMenu.tsx");