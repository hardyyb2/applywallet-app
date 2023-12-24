"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "~/components/isolated/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/isolated/DropdownMenu";
import { Icons } from "~/components/isolated/Icons";

import { languageOptions } from "@/utils/locale-utils/language-options";
import { cnM } from "@/utils/styles";

import { redirectedPathName } from "./localeSwitcher.utils";

const LocaleSwitcher = () => {
  const pathName = usePathname();

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
          const { activeLocale, newRedirectPath } = redirectedPathName(
            pathName,
            value,
          );

          return (
            <Link href={newRedirectPath} key={value}>
              <DropdownMenuItem
                className={cnM(
                  "flex gap-3",
                  activeLocale === value &&
                    "bg-primary text-primary-content focus:bg-primary",
                )}
                aria-label={label}
              >
                {icon}
                <span>{label}</span>
              </DropdownMenuItem>
            </Link>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export { LocaleSwitcher };
