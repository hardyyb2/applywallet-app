"use client";

import React from "react";
import { signIn } from "next-auth/react";

import { Button } from "@/components/ui/isolated/wrapped";
import { DEFAULT_AUTH_PROVIDERS } from "@/utils/auth.utils";

const LCLoginButton = () => {
  const handleLogin = () => {
    signIn(...DEFAULT_AUTH_PROVIDERS);
  };

  return (
    <Button onClick={handleLogin} color="primary" fullWidth>
      Login
    </Button>
  );
};

export { LCLoginButton };
