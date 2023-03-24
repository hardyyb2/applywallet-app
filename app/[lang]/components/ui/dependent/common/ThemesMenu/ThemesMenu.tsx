import clsx from "clsx";

import { Flex } from "@/components/ui/isolated/common";
import { Button, Dropdown } from "@/components/ui/isolated/wrapped";
import { CaretDown, ThemeIcon } from "public/images/icons";

import { ThemesMenuItemColors } from "./components/ThemesMenuItemColors";
import { selectableThemes } from "./themesMenu.utils";

const ThemesMenu = () => {
  return (
    <Dropdown vertical="end">
      <Dropdown.Toggle>
        <Button color="ghost" className="gap-1" responsive aria-haspopup>
          <ThemeIcon className="inline-block h-5 w-5 stroke-current md:h-6 md:w-6" />
          <span className="hidden md:inline">theme</span>
          <CaretDown className="ml-1 hidden h-3 w-3 fill-current opacity-60 sm:inline-block" />
        </Button>
      </Dropdown.Toggle>
      <Dropdown.Menu
        role="listbox"
        className="max-h-80 / flex-col flex-nowrap gap-3 / overflow-y-auto"
      >
        {selectableThemes.map(({ value }) => (
          <Dropdown.Item
            tabIndex={0}
            key={value}
            className={clsx(
              "bg-base-100 / overflow-hidden / rounded-lg",
              "outline-offset-2 outline-base-content",
            )}
            data-theme={value}
            data-act-class="outline"
            data-set-theme={value}
          >
            <Flex align="center" justify="space-between">
              <span className="text-base-content">{value}</span>
              <ThemesMenuItemColors />
            </Flex>
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export { ThemesMenu };
