export enum ApiErrorCodes {
  NOT_FOUND = "NOT_FOUND",
  BAD_REQUEST = "BAD_REQUEST",
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
