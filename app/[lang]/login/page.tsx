"use client";

import { signIn } from "next-auth/react";
import React from "react";

const Login = () => {
  return (
    <div
      onClick={() => {
        signIn("google");
      }}
    >
      Login
    </div>
  );
};

// eslint-disable-next-line import/no-default-export
export default Login;
