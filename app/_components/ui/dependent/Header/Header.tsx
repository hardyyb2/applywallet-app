import { ConditionalMatch } from "@dx-kit/react-conditional-match";

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
