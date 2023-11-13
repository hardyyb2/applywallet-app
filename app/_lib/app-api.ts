import axios, { type AxiosRequestConfig, type AxiosResponse } from "axios";

import { apiResponseSchema, type ApiResponseType } from "./api-response";
import { logger } from "./logs";

export const instance = axios.create({
  baseURL: "/",
});

const appApi = async <T, U extends boolean = false>(
  config: AxiosRequestConfig<any, T>,
  external: U = false as U,
): Promise<AxiosResponse<U extends true ? T : ApiResponseType<T>>> => {
  const res = await instance(config);
  const schema = config.schema;

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

appApi.get = async <T>(url: string, config?: AxiosRequestConfig<any, T>) => {
  return appApi({
    ...config,
    method: "GET",
    url,
  });
};

appApi.post = async <T>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig<any, T>,
) => {
  return appApi({
    ...config,
    method: "POST",
    url,
    data,
  });
};

appApi.put = async <T>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig<any, T>,
) => {
  return appApi({
    ...config,
    method: "PUT",
    url,
    data,
  });
};

appApi.delete = async <T>(url: string, config?: AxiosRequestConfig<any, T>) => {
  return appApi({
    ...config,
    method: "DELETE",
    url,
  });
};

export { appApi };
