"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Flex } from "@/components/isolated/common";
import { Button, Dropdown } from "@/components/isolated/wrapped";
import { languageOptions } from "@/utils/locale-utils/language-options";

import { redirectedPathName } from "./localeSwitcher.utils";
import { CaretDown, LanguageIcon } from "public/images";

const LocaleSwitcher = () => {
  const pathName = usePathname();

  return (
    <Dropdown vertical="end">
      <Dropdown.Toggle>
        <Button color="ghost" className="gap-1" aria-haspopup responsive>
          <LanguageIcon className="h-4 w-4 md:h-5 md:w-5" />
          <CaretDown className="ml-1 hidden h-3 w-3 opacity-60 sm:inline-block" />
        </Button>
      </Dropdown.Toggle>
      <Dropdown.Menu
        role="listbox"
        className="max-h-80 / flex-col flex-nowrap gap-3 / overflow-y-auto"
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
                "flex justify-between / bg-base-100 / rounded-lg",
                "outline-offset-2",
                activeLocale === value && "bg-primary / text-primary-content",
              )}
            >
              <Link href={newRedirectPath}>
                <Flex align="center" justify="space-between" className="gap-2">
                  {icon}
                  {label}
                </Flex>
              </Link>
            </Dropdown.Item>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export { LocaleSwitcher };
