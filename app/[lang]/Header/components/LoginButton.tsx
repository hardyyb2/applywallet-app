"use client";

import { signIn, useSession } from "next-auth/react";
import React from "react";

import { Button } from "@/components/ui/isolated/wrapped";
import { AppRoutes } from "@/utils/routes.utils";

const LoginButton = () => {
  const handleLoginClick = () => {
    signIn("google", {
      callbackUrl: AppRoutes.NEW_USER,
    });
  };

  return (
    <Button color="ghost" onClick={handleLoginClick}>
      login
    </Button>
  );
};

export { LoginButton };
