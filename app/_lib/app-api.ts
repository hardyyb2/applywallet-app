import axios, { type AxiosRequestConfig, type AxiosResponse } from "axios";

import { logger } from "../../common/utils/logs";
import {
  ApiError,
  ApiErrorCodes,
  apiResponseSchema,
  type ApiResponseType,
} from "./api-response";

export const instance = axios.create({
  baseURL: "/",
});

const appApi = async <T, U extends boolean = false>(
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
  const error = new ApiError({
    code: ApiErrorCodes.PARSING_FAILED,
    message: errorMessage,
  });
  throw error;
};

appApi.get = async <T, U extends boolean = false>(
  url: string,
  config?: AxiosRequestConfig<any, T, U>,
) => {
  return appApi({
    ...config,
    method: "GET",
    url,
  });
};

appApi.post = async <T, U extends boolean = false>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig<any, T, U>,
) => {
  return appApi({
    ...config,
    method: "POST",
    url,
    data,
  });
};

appApi.put = async <T, U extends boolean = false>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig<any, T, U>,
) => {
  return appApi({
    ...config,
    method: "PUT",
    url,
    data,
  });
};

appApi.delete = async <T, U extends boolean = false>(
  url: string,
  config?: AxiosRequestConfig<any, T, U>,
) => {
  return appApi({
    ...config,
    method: "DELETE",
    url,
  });
};

export { appApi };
