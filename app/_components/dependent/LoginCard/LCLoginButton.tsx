"use client";

import { signIn } from "next-auth/react";

import { Button } from "@/components/isolated/Button";
import { Icons } from "@/components/isolated/Icons";
import { Typography } from "@/components/isolated/Typography";
import { useI18n } from "@/locales/client";
import { DEFAULT_AUTH_PROVIDERS } from "@/utils/auth.utils";

const LCLoginButton = () => {
  const t = useI18n();

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
        {t("common.sign_in")}
      </Typography>
    </Button>
  );
};

export { LCLoginButton };
