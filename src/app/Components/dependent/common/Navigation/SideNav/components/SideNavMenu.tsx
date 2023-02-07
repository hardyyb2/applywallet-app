import { Flex, Typography } from "@/components/isolated/common";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { BaseScrollbar } from "../../../BaseScrollbar";
import { navItems } from "../../navigation.utils";

interface SideNavMenuProps {
  navOpen: boolean;
}

const SideNavMenu = ({ navOpen }: SideNavMenuProps) => {
  const pathname = usePathname();

  return (
    <BaseScrollbar>
      <Flex
        component="ul"
        wrap="nowrap"
        className={clsx(
          "menu menu-compact",
          "h-full / gap-y-2 / px-2 / overflow-y-auto",
        )}
      >
        {navItems.map((item) => {
          const active = pathname === item.link;

          return (
            <li key={item.key ?? item.link}>
              <Link
                href={item.link}
                className={clsx("h-9 py-2", {
                  active,
                })}
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
      </Flex>
    </BaseScrollbar>
  );
};

export default SideNavMenu;
