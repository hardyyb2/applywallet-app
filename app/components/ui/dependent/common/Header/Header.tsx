import React from "react";

import { ConditionalMatch } from "@dx-kit/react-conditional-match";

import {
  LocaleSwitcher,
  ThemesMenu,
  UserMenu,
} from "app/components/ui/dependent/common";
import { getCurrentUser } from "app/utils/session.utils";

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
