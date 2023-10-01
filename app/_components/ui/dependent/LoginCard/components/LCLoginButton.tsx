"use client";

import { signIn } from "next-auth/react";

import { DEFAULT_AUTH_PROVIDERS } from "@/_utils/auth.utils";

import { Typography } from "@/components/ui/isolated/common";
import { Button } from "@/components/ui/isolated/wrapped";
import { Icons } from "@/components/ui/isolated/wrapped/Icons";

const LCLoginButton = () => {
  const handleLogin = () => {
    signIn(...DEFAULT_AUTH_PROVIDERS);
  };

  return (
    <Button
      onClick={handleLogin}
      color="primary"
      fullWidth
      startIcon={<Icons.Lock />}
    >
      <Typography variant="body2" component="div">
        sign in
      </Typography>
    </Button>
  );
};

export { LCLoginButton };
