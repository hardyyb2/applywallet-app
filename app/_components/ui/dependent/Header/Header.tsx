import {
  LocaleSwitcher,
  ThemesMenu,
  UserMenu,
} from "@/components/ui/dependent";

import { HeaderClient } from "./components/HeaderClient";

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
