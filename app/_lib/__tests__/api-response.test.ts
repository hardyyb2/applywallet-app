import { ApiError, ApiErrorCodes, ApiResponse } from "../api-response";

describe("ApiResponse class", () => {
  it("should create an instance of ApiResponse", () => {
    const response = new ApiResponse<string>("Success");
    expect(response).toBeInstanceOf(ApiResponse);
    expect(response.success).toBe(true);
    expect(response.data).toBe("Success");
  });
});

describe("ApiError class", () => {
  it("should create an instance of ApiError", () => {
    const error = new ApiError<string>({
      code: ApiErrorCodes.NOT_FOUND,
      message: "Resource not found",
    });

    expect(error).toBeInstanceOf(ApiError);
    expect(error.success).toBe(false);
    expect(error.error).toEqual({
      code: ApiErrorCodes.NOT_FOUND,
      message: "Resource not found",
    });
  });
});
