"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button, Dropdown } from "@/components/isolated/wrapped";
import { languageOptions } from "@/utils/locale-utils/language-options";
import { CaretDown, LanguageIcon } from "public/images/icons";

import { redirectedPathName } from "./localeSwitcher.utils";

const LocaleSwitcher = () => {
  const pathName = usePathname();

  return (
    <Dropdown vertical="end">
      <Dropdown.Toggle>
        <Button
          color="ghost"
          className="gap-1"
          aria-haspopup
          aria-label="languages"
          responsive
        >
          <LanguageIcon className="h-4 w-4 md:h-5 md:w-5" />
          <CaretDown className="ml-1 hidden h-3 w-3 opacity-60 sm:inline-block" />
        </Button>
      </Dropdown.Toggle>
      <Dropdown.Menu
        role="listbox"
        className="max-h-80 / flex-col flex-nowrap gap-2 / overflow-y-auto"
      >
        {languageOptions.map(({ label, value, icon }) => {
          const { activeLocale, newRedirectPath } = redirectedPathName(
            pathName,
            value,
          );

          return (
            <Dropdown.Item
              key={value}
              className={clsx(
                "bg-base-100 / rounded-lg outline-offset-2 / [&_a]:w-max [&_a]:p-0",
                activeLocale === value && "bg-primary / text-primary-content",
              )}
              role="listitem"
              aria-label={label}
            >
              <Link href={newRedirectPath} tabIndex={-1}>
                <Button
                  startIcon={icon}
                  color="ghost"
                  className="flex flex-row flex-nowrap"
                  aria-label={label}
                >
                  <span>{label}</span>
                </Button>
              </Link>
            </Dropdown.Item>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export { LocaleSwitcher };
