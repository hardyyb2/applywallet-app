import { z } from "zod";

/** <response> */
export const apiResponseSchema = z.object({
  success: z.boolean(),
  data: z.any().optional(),
});

export interface ApiResponseType<ResponseData>
  extends z.infer<typeof apiResponseSchema> {
  data?: ResponseData;
}

export class ApiResponse<ResponseData> {
  success: boolean;
  data?: ResponseData;

  constructor(data?: ResponseData) {
    this.success = true;
    this.data = data;
  }
}

/** </response> */

/** <error> */
export enum ApiErrorCodes {
  UNAUTHORIZED = "ERR_UNAUTHORIZED",
  FORBIDDEN = "ERROR_FORBIDDEN",
  NOT_FOUND = "ERR_NOT_FOUND",
  BAD_REQUEST = "ERR_BAD_REQUEST",
  SERVER_ERROR = "ERR_SERVER_ERROR",
}

export const apiErrorSchema = z.object({
  success: z.literal(false),
  error: z.object({
    message: z.string().optional(),
    code: z.nativeEnum(ApiErrorCodes),
    data: z.any().optional(),
  }),
});

type ApiErrorType<ErrorData> = z.infer<typeof apiErrorSchema>["error"] & {
  data?: ErrorData;
};

export class ApiError<ErrorData> {
  success: boolean;
  error: ApiErrorType<ErrorData>;

  constructor(error: ApiErrorType<ErrorData>) {
    this.success = false;
    this.error = error;
  }
}
/** </error> */
