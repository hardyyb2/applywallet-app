import { z } from "zod";

const CustomErrorSchema = z.object({
  message: z.string(),
});

type CustomErrorType = z.infer<typeof CustomErrorSchema>;

const isCustomError = (error: unknown): error is CustomErrorType => {
  return CustomErrorSchema.safeParse(error).success;
};

const toCustomError = (maybeError: unknown): CustomErrorType => {
  if (isCustomError(maybeError)) return maybeError;

  try {
    return new Error(JSON.stringify(maybeError));
  } catch {
    return new Error(String(maybeError));
  }
};

class CustomError {
  private error: CustomErrorType;

  constructor(error: unknown) {
    this.error = toCustomError(error);
  }

  get message() {
    return this.error.message;
  }
}

export { CustomError };
