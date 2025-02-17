import { Fragment, type Ref } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Menu, MenuItem, MenuTitle } from "~/components/ds/Menu/Menu";
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ds/Tooltip";
import { Typography } from "~/components/ds/Typography";
import { getLinkWithLocale } from "~/utils/routes";

import { useI18n } from "@/locales/client";
import { cn } from "@/utils/styles";

import {
  categoryLabelMapping,
  groupedNavItemsEntries,
} from "./navigation.utils";

interface NavigationMenuProps {
  navOpen: boolean;
  className?: string;
  onNavItemClick?: () => void;
  selectedItemRef?: Ref<HTMLAnchorElement> | undefined;
}

const NavigationMenu = ({
  navOpen,
  className = "",
  onNavItemClick = () => null,
  selectedItemRef,
}: NavigationMenuProps) => {
  const t = useI18n();
  const pathName = usePathname();

  return (
    <Menu className="w-full" size="sm">
      {groupedNavItemsEntries.map(([group, items]) => {
        return (
          <Fragment key={group}>
            {navOpen && <MenuTitle>{t(categoryLabelMapping[group])}</MenuTitle>}

            {items.map((item) => {
              const itemLinkWithLocale = getLinkWithLocale({
                link: item.link,
                pathName,
              });

              // TODO: Figure out for nested routes
              const active = itemLinkWithLocale === pathName;

              const ItemIcon = item.icon;

              const listItem = (
                <MenuItem key={item.key ?? itemLinkWithLocale}>
                  <Link
                    ref={active ? selectedItemRef : undefined}
                    href={itemLinkWithLocale}
                    className={cn("py-2", {
                      "d-menu-active": active,
                      "justify-center": !navOpen,
                    })}
                    onClick={onNavItemClick}
                  >
                    <ItemIcon />
                    {navOpen ? (
                      <Typography
                        variant="label-s"
                        lg="label-m"
                        className="line-clamp-1 text-ellipsis"
                      >
                        {t(item.label)}
                      </Typography>
                    ) : null}
                  </Link>
                </MenuItem>
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
                    <TooltipContent sideOffset={12} color="neutral">
                      {t(item.label)}
                      <TooltipArrow color="neutral" />
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              );
            })}
          </Fragment>
        );
      })}
    </Menu>
  );
};

export { NavigationMenu };
