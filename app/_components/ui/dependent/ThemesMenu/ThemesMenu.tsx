import { Flex } from "@/components/ui/isolated/common";
import { Button, Dropdown } from "@/components/ui/isolated/wrapped";
import { Icons } from "@/components/ui/isolated/wrapped/Icons";
import { cn } from "@/utils/styles.utils";

import { ThemesMenuItemColors } from "./components/ThemesMenuItemColors";
import { selectableThemes } from "./themesMenu.utils";

const ThemesMenu = () => {
  return (
    <Dropdown vertical="end">
      <Dropdown.Toggle>
        <Button color="ghost" className="gap-1" responsive aria-haspopup>
          <Icons.Palette className="inline-block h-5 w-5 stroke-current md:h-6 md:w-6" />
          <span className="hidden md:inline">theme</span>
          <Icons.ChevronDown className="ml-1 hidden opacity-60 sm:inline-block" />
        </Button>
      </Dropdown.Toggle>
      <Dropdown.Menu
        role="listbox"
        className="max-h-80 flex-col flex-nowrap gap-3 overflow-y-auto"
      >
        {selectableThemes.map(({ value }) => (
          <Dropdown.Item
            tabIndex={0}
            key={value}
            className={cn(
              "overflow-hidden rounded-lg bg-base-100",
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
