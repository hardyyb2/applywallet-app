import { Fragment } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Flex } from "~/components/ds/Flex";
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
  const t = useI18n();
  const pathName = usePathname();

  return (
    <Flex
      component="ul"
      wrap="nowrap"
      className={cn(
        "d-menu-compact d-menu max-w-none",
        "space-y-3xs-2xs h-full overflow-y-auto px-2",
        className,
      )}
    >
      {groupedNavItemsEntries.map(([group, items]) => {
        return (
          <Fragment key={group}>
            {/* TODO: fix this */}
            {/* @ts-expect-error */}
            {navOpen && <li className="d-menu-title">{t(`nav.${group}`)}</li>}

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
                    className={cn("py-2", {
                      "d-active": active,
                    })}
                    onClick={onNavItemClick}
                  >
                    <ItemIcon className="w-5 lg:w-6" />
                    {navOpen ? (
                      <Typography
                        variant="label-s"
                        lg="label-m"
                        className="text-ellipsis"
                      >
                        {/* TODO: fix this */}
                        {/* @ts-expect-error */}
                        {t(item.label)}
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
                      {/* TODO: fix this */}
                      {/* @ts-expect-error */}
                      {t(item.label)}
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
