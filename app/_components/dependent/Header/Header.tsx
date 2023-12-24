import { Flex } from "~/components/isolated/Flex";

import { cnM } from "@/utils/styles";

import { LocaleSwitcher } from "../LocaleSwitcher";
import { ThemesMenu } from "../ThemesMenu";
import { UserMenu } from "../UserMenu";

const Header = async () => {
  return (
    <Flex
      align="center"
      justify="space-between"
      className={cnM("h-full w-full px-4 lg:px-10")}
    >
      <div className="title-s inline-flex !font-primary text-lg lowercase text-primary lg:title-m">
        <span>apply</span>
        <span className="text-base-content">wallet</span>
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
