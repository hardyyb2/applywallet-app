"use client";

import { signIn } from "next-auth/react";

import { Button } from "~/components/ds/Button";

const LoginPage = () => {
  return (
    <Button
      onClick={() => {
        signIn("google");
      }}
    >
      Sign in
    </Button>
  );
};

export default LoginPage;
