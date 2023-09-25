"use client";

import { ReactNode } from "react";

import { SWRConfig } from "swr";

const SWRProviders = ({ children }: { children: ReactNode }) => {
  return <SWRConfig>{children}</SWRConfig>;
};

export { SWRProviders };
