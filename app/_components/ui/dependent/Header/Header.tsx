import { getCurrentUser } from "@/_utils/session.utils";
import { ConditionalMatch } from "@dx-kit/react-conditional-match";

import {
  LocaleSwitcher,
  ThemesMenu,
  UserMenu,
} from "@/components/ui/dependent";

import { HeaderClient } from "./components/HeaderClient";
import { LoginButton } from "./components/LoginButton";

const Header = async () => {
  const user = await getCurrentUser();

  return (
    <HeaderClient>
      <ThemesMenu />
      <LocaleSwitcher />
      <ConditionalMatch fallback={<LoginButton />}>
        <ConditionalMatch.Render when={user}>
          <UserMenu />
        </ConditionalMatch.Render>
      </ConditionalMatch>
    </HeaderClient>
  );
};

export { Header };
