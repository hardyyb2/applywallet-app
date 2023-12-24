"use client";

import { Button } from "@/components/isolated/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/isolated/DropdownMenu";
import { Icons } from "@/components/isolated/Icons";
import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/utils/styles";

import { selectableThemes } from "./themesMenu.utils";
import { ThemesMenuItemColors } from "./ThemesMenuItemColors";

const ThemesMenu = () => {
  const { theme: activeTheme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button color="ghost" className="gap-1" responsive>
          <Icons.Palette className="inline-block h-5 w-5 stroke-current md:h-6 md:w-6" />
          <span className="hidden md:inline">theme</span>
          <Icons.ChevronDown className="ml-1 hidden opacity-60 sm:inline-block" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent role="listbox" className="max-h-80 overflow-y-auto">
        {selectableThemes.map(({ value }) => (
          <DropdownMenuItem key={value} asChild>
            <Button
              data-theme={value}
              onClick={() => setTheme(value)}
              className={cn(
                activeTheme === value &&
                  "outline outline-offset-2 outline-base-content",
                "flex justify-between gap-2",
              )}
              startIcon={
                activeTheme === value ? (
                  <Icons.Check className="h-4 w-4 stroke-current stroke-[4px]" />
                ) : null
              }
            >
              <span className="label-s text-base-content lg:label-m">
                {value}
              </span>
              <ThemesMenuItemColors />
            </Button>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export { ThemesMenu };
