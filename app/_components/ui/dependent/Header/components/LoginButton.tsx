"use client";

import { signIn } from "next-auth/react";

import { Button } from "@/_components/ui/isolated/wrapped";
import { AppRoutes } from "@/_utils/routes.utils";

const LoginButton = () => {
  const handleLoginClick = () => {
    signIn("google", {
      callbackUrl: AppRoutes.POST_LOGIN,
    });
  };

  return (
    <Button color="ghost" onClick={handleLoginClick}>
      login
    </Button>
  );
};

export { LoginButton };
