import axios, { type AxiosRequestConfig, type AxiosResponse } from "axios";
import { z } from "zod";

import { apiResponseSchema, type ApiResponseType } from "./api-response";

const instance = axios.create({
  baseURL: "/",
});

const appApi = async <T>(
  config: AxiosRequestConfig,
  schema?: z.Schema<T>,
): Promise<AxiosResponse<ApiResponseType<T>>> => {
  const res = await instance(config);

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

// appApi.get = async <T>(
//   url: string,
//   config?: AxiosRequestConfig,
//   schema?: z.Schema<T>,
// ): Promise<AxiosResponse<ApiResponseType<T>>> => {
//   return appApi(
//     {
//       url,
//       method: "GET",
//     },
//     schema,
//   );
// };

export { appApi };
