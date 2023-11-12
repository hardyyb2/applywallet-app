import axios, { type AxiosRequestConfig } from "axios";
import type { z } from "zod";

const extApi = axios.create({
  baseURL: process.env.PLASMO_PUBLIC_API_URL,
  withCredentials: true,
});

const extApiTyped = async <T>(
  config: AxiosRequestConfig,
  schema: z.Schema<T>,
) => {
  const res = await extApi(config);

  if (res.data?.success) {
    const data = schema.parse(res.data.data);
    return data;
  }
};

export { extApi, extApiTyped };
