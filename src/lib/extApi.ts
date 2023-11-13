import axios, { type AxiosRequestConfig, type AxiosResponse } from "axios";

import { apiResponseSchema, type ApiResponseType } from "@/lib/api-response";

const instance = axios.create({
  baseURL: "/",
});

const extApi = async <T>(
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

extApi.get = async <T>(url: string, config?: AxiosRequestConfig<any, T>) => {
  return extApi({
    ...config,
    method: "GET",
    url,
  });
};

extApi.post = async <T>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig<any, T>,
) => {
  return extApi({
    ...config,
    method: "POST",
    url,
    data,
  });
};

extApi.put = async <T>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig<any, T>,
) => {
  return extApi({
    ...config,
    method: "PUT",
    url,
    data,
  });
};

extApi.delete = async <T>(url: string, config?: AxiosRequestConfig<any, T>) => {
  return extApi({
    ...config,
    method: "DELETE",
    url,
  });
};

export { extApi };
