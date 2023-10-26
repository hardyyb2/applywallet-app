import React from "react";

import axios from "axios";
import type { Session } from "next-auth";
import useSWR from "swr";

import { ApiRoutes } from "@/utils/routes.utils";

import "./style.scss";

const Popup = () => {
  const { data, isLoading, error } = useSWR(ApiRoutes.SESSION, async (key) => {
    const URL = process.env.PLASMO_PUBLIC_API_URL;

    const res = await axios.get(`${URL}${key}`);

    return res.data as Session;
  });

  if (isLoading) {
    return <div>loading..</div>;
  }

  if (data?.user) {
    return (
      <div className="w-100">
        signed in as {data.user.name || data.user.email}
      </div>
    );
  }

  return <div>login</div>;
};

export default Popup;
