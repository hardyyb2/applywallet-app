"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button, Dropdown } from "@/components/isolated/wrapped";
import { i18n } from "@/utils/locale-utils/i18n-config";

import { redirectedPathName } from "./localeSwitcher.utils";

const LocaleSwitcher = () => {
  const pathName = usePathname();

  return (
    <Dropdown vertical="end">
      <Dropdown.Toggle>
        <Button color="ghost" className="gap-1" aria-haspopup>
          <svg
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-5 w-5 stroke-current md:h-6 md:w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
            ></path>
          </svg>
          <span className="hidden md:inline">lang</span>
          <svg
            width="12px"
            height="12px"
            className="ml-1 hidden h-3 w-3 fill-current opacity-60 sm:inline-block"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 2048 2048"
          >
            <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
          </svg>
        </Button>
      </Dropdown.Toggle>
      <Dropdown.Menu
        role="listbox"
        className="max-h-80 / flex-col flex-nowrap gap-3 / overflow-y-auto"
      >
        {i18n.locales.map((locale) => {
          const { activeLocale, newRedirectPath } = redirectedPathName(
            pathName,
            locale,
          );

          return (
            <Dropdown.Item
              key={locale}
              className={clsx(
                "flex justify-between / bg-base-100",
                "outline-offset-2",
                activeLocale === locale && "outline-base-content",
              )}
            >
              <Link href={newRedirectPath}>{locale}</Link>
            </Dropdown.Item>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export { LocaleSwitcher };
