import { Fragment } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Flex,
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  Typography,
} from "@/components/isolated";
import { getLinkWithLocale } from "@/utils/routes.utils";
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

              const active =
                itemLinkWithLocale === pathName ||
                (item.link && pathName.includes(item.link));

              const ItemIcon = item.icon;

              const listItem = (
                <li>
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

              if (navOpen) {
                return listItem;
              }

              return (
                <TooltipProvider
                  key={item.key ?? itemLinkWithLocale}
                  delayDuration={600}
                >
                  <Tooltip>
                    <TooltipTrigger asChild>{listItem}</TooltipTrigger>
                    <TooltipContent sideOffset={12}>
                      <Typography variant="h6">{item.label}</Typography>
                      <TooltipArrow />
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              );
            })}
          </Fragment>
        );
      })}
    </Flex>
  );
};

export { NavigationMenu };
