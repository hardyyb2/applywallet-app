import { Fragment } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Flex } from "@/components/isolated/Flex";
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/isolated/Tooltip";
import { Typography } from "@/components/isolated/Typography";
import { getLinkWithLocale } from "@/utils/routes";
import { cn } from "@/utils/styles";

import { groupedNavItemsEntries } from "./navigation.utils";

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
        "dui-menu-compact dui-menu max-w-none",
        "h-full space-y-3 overflow-y-auto px-2",
        className,
      )}
    >
      {groupedNavItemsEntries.map(([group, items]) => {
        return (
          <Fragment key={group}>
            {navOpen && (
              <li className="dui-menu-title">
                <Typography variant="label-l">{group}</Typography>
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
                <li key={item.key ?? itemLinkWithLocale}>
                  <Link
                    href={itemLinkWithLocale}
                    className={cn("py-2 ", {
                      "dui-active text-primary-content": active,
                    })}
                    onClick={onNavItemClick}
                  >
                    <ItemIcon />
                    {navOpen ? (
                      <Typography
                        key={item.key}
                        variant="title-m"
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
                      <Typography variant="title-m">{item.label}</Typography>
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
