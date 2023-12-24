"use client";

import { signIn } from "next-auth/react";

import { Button } from "~/components/ds/Button";
import { AppRoutes } from "~/utils/routes";

const LoginButton = () => {
  const handleLoginClick = () => {
    signIn("google", {
      callbackUrl: AppRoutes.POST_LOGIN,
    });
  };

  return (
    <Button color="ghost" responsive onClick={handleLoginClick}>
      login
    </Button>
  );
};

export { LoginButton };
