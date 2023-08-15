"use client";

import { signIn } from "next-auth/react";

import { Button } from "@/components/ui/isolated/wrapped";

export default function LoginPage() {
  return (
    <Button
      onClick={() => {
        signIn("google");
      }}
    >
      Sign in
    </Button>
  );
}
