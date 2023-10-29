import { LocaleSwitcher } from "../LocaleSwitcher";
import { ThemesMenu } from "../ThemesMenu";
import { UserMenu } from "../UserMenu";
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
