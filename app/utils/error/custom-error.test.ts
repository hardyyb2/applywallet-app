import { CustomError } from "./custom-error";

describe("CustomError", () => {
  test("should create instance with valid error object", () => {
    const errorObject = { message: "Test error message" };
    const customError = new CustomError(errorObject);
    expect(customError.message).toBe(errorObject.message);
  });

  test("should stringify error if invalid error object", () => {
    const invalidErrorObject = { invalid: "invalid error" };
    const invalidError = new CustomError(invalidErrorObject);
    expect(invalidError.message).toBe(JSON.stringify(invalidErrorObject));
  });

  test("should stringify non-object errors", () => {
    const nonObjectError = "Non-object error";
    const stringError = new CustomError(nonObjectError);
    expect(stringError.message).toBe(`"${nonObjectError}"`);

    const numberError = new CustomError(123);
    expect(numberError.message).toBe(String(123));

    const booleanError = new CustomError(true);
    expect(booleanError.message).toBe(String(true));
  });

  test("should create instance for regular Error object", () => {
    const regularError = new Error("Regular error");
    const errorInstance = new CustomError(regularError);
    expect(errorInstance.message).toBe("Regular error");
  });
});
