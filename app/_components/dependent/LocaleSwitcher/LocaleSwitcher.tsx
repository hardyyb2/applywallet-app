"use client";

import { usePathname } from "next/navigation";

import { Button } from "~/components/ds/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ds/DropdownMenu";
import { Icons } from "~/components/ds/Icons";

import { useChangeLocale, useCurrentLocale } from "@/locales/client";
import { languageOptions } from "@/utils/locale-utils/language-options";
import { cnM } from "@/utils/styles";

const LocaleSwitcher = () => {
  const pathName = usePathname();
  const changeLocale = useChangeLocale();
  const currentLocale = useCurrentLocale();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
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
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languageOptions.map(({ label, value, icon }) => {
          return (
            <DropdownMenuItem
              key={value}
              className={cnM(
                "flex gap-3",
                currentLocale === value &&
                  "bg-primary text-primary-content focus:bg-primary",
              )}
              aria-label={label}
              onClick={() => changeLocale(value)}
            >
              {icon}
              <span>{label}</span>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export { LocaleSwitcher };
