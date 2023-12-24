import type { RequestOptions } from "https";

import axios, { type AxiosRequestConfig, type AxiosResponse } from "axios";
import type { z } from "zod";

import { logger } from "~/utils/logs";

import { apiResponseSchema, type ApiResponseType } from "@/lib/api-response";

export const instance = axios.create({
  baseURL: process.env.PLASMO_PUBLIC_API_URL,
});

const extApi = async <T, U extends boolean = false>(
  config: AxiosRequestConfig<any, T, U>,
): Promise<AxiosResponse<U extends true ? T : ApiResponseType<T>>> => {
  const res = await instance(config);
  const schema = config.schema;
  const external = config.external ?? false;

  if (!schema) {
    return res;
  }

  const resSchema = external
    ? schema
    : apiResponseSchema.extend({ data: schema });
  const parsedData = resSchema.safeParse(res.data);

  if (parsedData.success) {
    res.data = parsedData.data;
    return res;
  }

  const errorMessage =
    "Invalid response, parsing failed" +
    JSON.stringify(parsedData.error.errors, null, 2);

  logger.error(errorMessage);
  throw new Error(errorMessage);
};

extApi.get = async <T, U extends boolean = false>(
  url: string,
  config?: AxiosRequestConfig<any, T, U>,
) => {
  return extApi({
    ...config,
    method: "GET",
    url,
  });
};

extApi.post = async <T, U extends boolean = false>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig<any, T, U>,
) => {
  return extApi({
    ...config,
    method: "POST",
    url,
    data,
  });
};

extApi.put = async <T, U extends boolean = false>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig<any, T, U>,
) => {
  return extApi({
    ...config,
    method: "PUT",
    url,
    data,
  });
};

extApi.delete = async <T, U extends boolean = false>(
  url: string,
  config?: AxiosRequestConfig<any, T, U>,
) => {
  return extApi({
    ...config,
    method: "DELETE",
    url,
  });
};

// TODO - completely remove this when we have fetch adapter for axios
interface FetchConfig<T, U extends boolean> extends RequestOptions {
  schema?: z.Schema<T>;
  external?: U;
}

extApi.fetch = async <T, U extends boolean = false>(
  url: URL | string,
  config?: FetchConfig<T, U>,
): Promise<U extends true ? T : ApiResponseType<T>> => {
  /** The fetch is hijacked by next 13, and expects "RequestInit" object as second param,
      but we are in extension so the fetch is browser native and not next's **/
  // @ts-expect-error
  const fetchResult = await fetch(url, config);

  if (!fetchResult.ok) {
    logger.error("Fetch failed");
    throw new Error("Fetch failed");
  }
  const data = await fetchResult.json();

  if (!config?.schema) {
    return data;
  }

  const schema = config.schema;
  const external = config.external ?? false;

  const resSchema = external
    ? schema
    : apiResponseSchema.extend({ data: schema });
  const parsedData = resSchema.safeParse(data);

  if (parsedData.success) {
    return parsedData.data as U extends true ? T : ApiResponseType<T>;
  }

  const errorMessage =
    "Invalid response, parsing failed" +
    JSON.stringify(parsedData.error.errors, null, 2);

  logger.error(errorMessage);
  throw new Error(errorMessage);
};

export { extApi };
