"use client";

import { signIn, useSession } from "next-auth/react";
import React from "react";

import { Button } from "@/components/ui/isolated/wrapped";

const LoginButton = () => {
  const handleLoginClick = () => {
    signIn("google", {
      callbackUrl: "/new-sheet",
    });
  };

  return (
    <Button color="ghost" onClick={handleLoginClick}>
      login
    </Button>
  );
};

export { LoginButton };
