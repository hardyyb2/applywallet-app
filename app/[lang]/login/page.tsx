"use client";

import React from "react";
import { signIn } from "next-auth/react";

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
