"use client";

import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";

import { domAnimation, LazyMotion, MotionConfig } from "framer-motion";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <SessionProvider>
      <LazyMotion features={domAnimation}>
        <MotionConfig
          transition={{ type: "spring", stiffness: 400, damping: 24 }}
        >
          {children}
        </MotionConfig>
      </LazyMotion>
    </SessionProvider>
  );
};

export { Providers };
