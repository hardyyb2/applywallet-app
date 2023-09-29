"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button, Popover } from "@/_components/ui/isolated/wrapped";
import { languageOptions } from "@/_utils/locale-utils/language-options";
import { cn } from "@/_utils/styles.utils";

import { Icons } from "@/components/ui/isolated/wrapped/Icons";

import { redirectedPathName } from "./localeSwitcher.utils";

const LocaleSwitcher = () => {
  const pathName = usePathname();

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <Button
          color="ghost"
          className="gap-1"
          aria-haspopup
          aria-label="languages"
          responsive
        >
          <Icons.Languages className="h-4 w-4 md:h-5 md:w-5" />
          <Icons.ChevronDown className="ml-1 hidden opacity-60 sm:inline-block" />
        </Button>
      </Popover.Trigger>
      <Popover.Content align="end">
        <ul role="listbox" className="menu gap-2 rounded-xl bg-base-100 p-2">
          {languageOptions.map(({ label, value, icon }) => {
            const { activeLocale, newRedirectPath } = redirectedPathName(
              pathName,
              value,
            );

            return (
              <li
                key={value}
                className={cn(
                  "rounded-lg bg-base-100 outline-offset-2 [&_a]:w-max [&_a]:p-0",
                  activeLocale === value && "/ bg-primary text-primary-content",
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
              </li>
            );
          })}
        </ul>
      </Popover.Content>
    </Popover.Root>
  );
};

export { LocaleSwitcher };
