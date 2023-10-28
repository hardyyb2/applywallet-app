"use client";

import { signIn } from "next-auth/react";

import { Button } from "@/components/isolated/Button";
import { AppRoutes } from "@/utils/routes.utils";

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
