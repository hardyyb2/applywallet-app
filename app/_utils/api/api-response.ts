export enum ApiErrorCodes {
  UNAUTHORIZED = "ERR_UNAUTHORIZED",
  FORBIDDEN = "ERROR_FORBIDDEN",
  NOT_FOUND = "ERR_NOT_FOUND",
  BAD_REQUEST = "ERR_BAD_REQUEST",
  SERVER_ERROR = "ERR_SERVER_ERROR",
}

export class ApiResponse<ResponseData> {
  success: boolean;
  data?: ResponseData;

  constructor(data?: ResponseData) {
    this.success = true;
    this.data = data;
  }
}

type ErrorType<ErrorData> = {
  message?: string;
  code: ApiErrorCodes;
  data?: ErrorData;
};

export class ApiError<ErrorData> {
  success: boolean;
  error: ErrorType<ErrorData>;

  constructor(error: ErrorType<ErrorData>) {
    this.success = false;
    this.error = error;
  }
}
