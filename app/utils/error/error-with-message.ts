import { z } from "zod";

const ErrorSchema = z.object({
  message: z.string(),
});

type ErrorWithMessageType = z.infer<typeof ErrorSchema>;

const isErrorWithMessage = (error: unknown): error is ErrorWithMessageType => {
  return ErrorSchema.safeParse(error).success;
};

const toErrorWithMessage = (maybeError: unknown): ErrorWithMessageType => {
  if (isErrorWithMessage(maybeError)) return maybeError;

  try {
    return new Error(JSON.stringify(maybeError));
  } catch {
    return new Error(String(maybeError));
  }
};

class ErrorWithMessage {
  private error: ErrorWithMessageType;

  constructor(error: unknown) {
    this.error = toErrorWithMessage(error);
  }

  get message() {
    return this.error.message;
  }
}

export { ErrorWithMessage };
