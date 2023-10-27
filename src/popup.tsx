import React from "react";

import axios from "axios";
import type { Session } from "next-auth";
import useSWR from "swr";

import { BarLoader, Flex } from "@/components/isolated";
import { ApiRoutes } from "@/utils/routes.utils";

import { ExtLoginCard } from "./components/ExtLoginCard";

import "@/styles/overrides/daisyui.scss";
import "./globals.ext.scss";

import { ExtProviders } from "./providers";

const Popup = () => {
  const { data, isLoading, error } = useSWR(ApiRoutes.SESSION, async (key) => {
    const URL = process.env.PLASMO_PUBLIC_API_URL;

    const res = await axios.get(`${URL}${key}`);

    return res.data as Session;
  });

  if (isLoading) {
    return (
      <BarLoader barClassName="h-l w-3xs" className="justify-center p-s" />
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
