import { ErrorWithMessage } from "./error-with-message";

describe("ErrorWithMessage", () => {
  test("should create instance with valid error object", () => {
    const errorObject = { message: "Test error message" };
    const customError = new ErrorWithMessage(errorObject);
    expect(customError.message).toBe(errorObject.message);
  });

  test("should stringify error if invalid error object", () => {
    const invalidErrorObject = { invalid: "invalid error" };
    const invalidError = new ErrorWithMessage(invalidErrorObject);
    expect(invalidError.message).toBe(JSON.stringify(invalidErrorObject));
  });

  test("should stringify non-object errors", () => {
    const nonObjectError = "Non-object error";
    const stringError = new ErrorWithMessage(nonObjectError);
    expect(stringError.message).toBe(`"${nonObjectError}"`);

    const numberError = new ErrorWithMessage(123);
    expect(numberError.message).toBe(String(123));

    const booleanError = new ErrorWithMessage(true);
    expect(booleanError.message).toBe(String(true));
  });

  test("should create instance for regular Error object", () => {
    const regularError = new Error("Regular error");
    const errorInstance = new ErrorWithMessage(regularError);
    expect(errorInstance.message).toBe("Regular error");
  });
});
