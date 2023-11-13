import "axios";

import { z } from "zod";

declare module "axios" {
  interface AxiosRequestConfig<D = any, T = any> {
    schema?: z.Schema<T>;
    external?: boolean;
  }
}
