"use client";

import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";

import { domAnimation, LazyMotion, MotionConfig } from "framer-motion";
import { ToastContainer } from "react-toastify";

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
      <ToastContainer position="top-right" limit={4} autoClose={5000} />
    </SessionProvider>
  );
};

export { Providers };
