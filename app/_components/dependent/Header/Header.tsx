import { Flex } from "@/components/isolated/Flex";
import { Typography } from "@/components/isolated/Typography";
import { cnMerge } from "@/utils/styles";

import { LocaleSwitcher } from "../LocaleSwitcher";
import { ThemesMenu } from "../ThemesMenu";
import { UserMenu } from "../UserMenu";

const Header = async () => {
  return (
    <Flex
      align="center"
      justify="space-between"
      className={cnMerge("h-full w-full px-4 lg:px-10")}
    >
      <div className="text-lg inline-flex lowercase text-primary">
        <Typography>apply</Typography>
        <Typography className="text-base-content">wallet</Typography>
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
