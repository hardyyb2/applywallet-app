"use client";

import { signIn } from "next-auth/react";

import { Button } from "~/components/ds/Button";
import { Icons } from "~/components/ds/Icons";
import { AppRoutes } from "~/utils/routes";

const LoginButton = () => {
  const handleLoginClick = () => {
    signIn("google", {
      callbackUrl: AppRoutes.POST_LOGIN,
    });
  };

  return (
    <Button color="ghost" responsive onClick={handleLoginClick}>
      <Icons.LogIn className="h-4 w-4 lg:h-6 lg:w-6" />
      <span className="hidden lg:inline">login</span>
    </Button>
  );
};

export { LoginButton };
