import axios, { type AxiosRequestConfig, type AxiosResponse } from "axios";

import { apiResponseSchema, type ApiResponseType } from "@/lib/api-response";
import { logger } from "@/lib/logs";

export const instance = axios.create({
  baseURL: "/",
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

export { extApi };
