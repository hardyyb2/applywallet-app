"use client";

import { signIn } from "next-auth/react";

import { AppRoutes } from "~/utils/routes";

import { Button } from "@/components/isolated/Button";

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
