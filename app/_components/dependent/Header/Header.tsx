import { Flex } from "~/components/ds/Flex";

import { cnM } from "@/utils/styles";

import { LocaleSwitcher } from "../LocaleSwitcher";
import { ThemesMenu } from "../ThemesMenu";
import { HeaderClient } from "./HeaderClient";

const Header = async () => {
  return (
    <Flex
      align="center"
      justify="space-between"
      className={cnM("h-full w-full pr-4 lg:pr-10")}
    >
      <div>
        <HeaderClient className="pl-4 lg:hidden" />
      </div>
      <Flex align="center" className="gap-1 lg:gap-2">
        <ThemesMenu />
        <LocaleSwitcher />
      </Flex>
    </Flex>
  );
};

export { Header };
