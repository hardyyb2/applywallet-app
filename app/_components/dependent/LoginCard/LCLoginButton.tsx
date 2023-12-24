"use client";

import { signIn } from "next-auth/react";

import { Button } from "@/components/isolated/Button";
import { Icons } from "@/components/isolated/Icons";
import { useI18n } from "@/locales/client";
import { DEFAULT_AUTH_PROVIDERS } from "@/utils/auth";

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
      <span className="body-s lg:body-m">{t("common.sign_in")}</span>
    </Button>
  );
};

export { LCLoginButton };
