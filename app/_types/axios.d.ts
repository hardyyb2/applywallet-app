import "axios";

import { z } from "zod";

declare module "axios" {
  interface AxiosRequestConfig<D = any, T = any, U extends boolean> {
    schema?: z.Schema<T>;
    /** Whether the request is external (outside our own backend) */
    external?: U;
  }
}
