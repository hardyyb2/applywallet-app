import axios, { type AxiosRequestConfig } from "axios";
import type { z } from "zod";

const appApi = axios.create({
  baseURL: "/",
});

const appApiTyped = async <T>(
  config: AxiosRequestConfig,
  schema: z.Schema<T>,
) => {
  const res = await appApi(config);

  if (res.data?.success) {
    const data = schema.parse(res.data.data);
    return data;
  }
};

export { appApi, appApiTyped };
