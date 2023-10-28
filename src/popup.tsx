import React from "react";

import { useStorage } from "@plasmohq/storage/hook";
import type { Session } from "next-auth";
import useSWR from "swr";

import { BarLoader } from "@/components/isolated/BarLoader";
import { logger } from "@/lib/logs";
import { ApiRoutes } from "@/utils/routes.utils";

import { ExtLoginCard } from "./components/ExtLoginCard";
import { extApi } from "./lib/extApi";
import { ExtProviders } from "./providers";

import "@/styles/overrides/daisyui.scss";
import "./globals.ext.scss";

const Popup = () => {
  // hooks
  const { data, isLoading, error } = useSWR(ApiRoutes.SESSION, async (key) => {
    const res = await extApi.get(key);
    return res.data as Session;
  });

  const [autoFillData] = useStorage("auto-fill");

  logger.info("autoFill", {}, ["a"]);

  if (isLoading) {
    return (
      <BarLoader barClassName="h-xl w-3xs" className="justify-center p-s " />
    );
  }

  if (data?.user) {
    return <div>signed in as {data.user.name || data.user.email}</div>;
  }

  return (
    <div>
      <ExtLoginCard />
    </div>
  );
};

const PopupWithProviders = () => {
  return (
    <ExtProviders>
      <Popup />
    </ExtProviders>
  );
};

export default PopupWithProviders;
