import { Button } from "~/components/ds/Button";
import { Flex } from "~/components/ds/Flex";

import { cnM } from "@/utils/styles";

import { LocaleSwitcher } from "../LocaleSwitcher";
import { ThemesMenu } from "../ThemesMenu";
import { UserMenu } from "../UserMenu";
import { HeaderClient } from "./HeaderClient";

const Header = async () => {
  return (
    <Flex
      align="center"
      justify="space-between"
      className={cnM("h-full w-full pr-4 lg:pr-10")}
    >
      <div>
        <div className="title-s hidden pl-4 !font-primary text-primary lg:title-m lg:inline-flex lg:pl-10">
          <span>a</span>
          <span className="text-base-content">w</span>
        </div>
        <HeaderClient className="pl-4 lg:hidden" />
      </div>
      <Flex align="center" className="gap-1 lg:gap-2">
        <ThemesMenu />
        <LocaleSwitcher />
        <UserMenu />
      </Flex>
    </Flex>
  );
};

export { Header };
