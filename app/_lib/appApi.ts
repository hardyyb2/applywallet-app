import axios, { type AxiosRequestConfig, type AxiosResponse } from "axios";

import { apiResponseSchema, type ApiResponseType } from "./api-response";

const instance = axios.create({
  baseURL: "/",
});

const appApi = async <T>(
  config: AxiosRequestConfig<any, T>,
): Promise<AxiosResponse<ApiResponseType<T>>> => {
  const res = await instance(config);
  const schema = config.schema;

  if (schema) {
    const resSchema = apiResponseSchema.extend({
      data: schema,
    });

    const data = resSchema.parse(res.data);

    if (data.success) {
      res.data = data;
      return res;
    }

    throw new Error("Invalid response, parsing failed");
  }

  return res;
};

appApi.get = async <T>(
  url: string,
  config?: AxiosRequestConfig<any, T>,
): Promise<AxiosResponse<ApiResponseType<T>>> => {
  return instance.get(url, config);
};

appApi.post = async <T>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig<any, T>,
): Promise<AxiosResponse<ApiResponseType<T>>> => {
  return instance.post(url, data, config);
};

appApi.put = async <T>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig<any, T>,
): Promise<AxiosResponse<ApiResponseType<T>>> => {
  return instance.put(url, data, config);
};

export { appApi };
