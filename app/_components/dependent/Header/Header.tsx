import { LocaleSwitcher, ThemesMenu, UserMenu } from "@/components/dependent";

import { HeaderClient } from "./HeaderClient";

const Header = async () => {
  return (
    <HeaderClient>
      <ThemesMenu />
      <LocaleSwitcher />
      <UserMenu />
    </HeaderClient>
  );
};

export { Header };
