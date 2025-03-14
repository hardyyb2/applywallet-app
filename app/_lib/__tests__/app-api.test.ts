import { cleanup } from "@testing-library/react";
import MockAdapter from "axios-mock-adapter";
import { z } from "zod";

import {
  ApiError,
  ApiErrorCodes,
  ApiResponse,
} from "../../../common/lib/api-response";
import { appApi, instance as axiosInstance } from "../app-api";

const mock = new MockAdapter(axiosInstance, { onNoMatch: "throwException" });

beforeAll(() => {
  mock.reset();
});

afterEach(() => {
  cleanup();
});

describe("appApi", () => {
  /* <Internal calls > */
  it("should return directly return data with no 'schema' for internal calls", async () => {
    const data = { foo: "bar" };
    mock.onGet("/foo").reply(200, data);

    const res = await appApi({ url: "/foo" });
    expect(res.data).toEqual(data);
  });

  it("should return 'ApiResponseType' data with 'schema' for internal calls", async () => {
    const data = new ApiResponse({ foo: "bar" });
    mock.onGet("/foo").reply(200, data);

    const res = await appApi({
      url: "/foo",
      schema: z.object({ foo: z.string() }),
    });
    expect(res.data).toEqual(data);
  });

  it("should throw error if incorrect data with 'schema' for internal calls", async () => {
    const data = new ApiResponse({ foo: 22 });
    mock.onGet("/foo").reply(200, data);

    await expect(
      appApi({
        url: "/foo",
        schema: z.object({ foo: z.string() }),
      }),
    ).rejects.toThrow();
  });
  /* </Internal calls> */

  /* <External calls > */
  it("should return directly return data with no 'schema' for external calls", async () => {
    const data = { foo: "bar" };
    mock.onGet("/foo").reply(200, data);

    const res = await appApi({ url: "/foo", external: true });
    expect(res.data).toEqual(data);
  });

  it("should return 'AxiosResponse'.data with 'schema' for external calls", async () => {
    const data = { foo: "bar" };
    mock.onGet("/foo").reply(200, data);

    const res = await appApi({
      url: "/foo",
      schema: z.object({ foo: z.string() }),
      external: true,
    });
    expect(res.data).toEqual(data);
  });

  it("should throw error if incorrect data with 'schema' for external calls", async () => {
    const data = { foo: 22 };
    mock.onGet("/foo").reply(200, data);

    await expect(
      appApi({
        url: "/foo",
        schema: z.object({ foo: z.string() }),
        external: true,
      }),
    ).rejects.toThrow();
  });
  /* </External calls> */

  it("should throw error if parsing failed", async () => {
    const data = { foo: 22 };
    mock.onGet("/foo").reply(200, data);

    try {
      await appApi({
        url: "/foo",
        schema: z.object({ foo: z.string() }),
      });
    } catch (e) {
      if (!(e instanceof ApiError)) {
        throw new Error("Error is not an instance of `ApiError`");
      }

      if (e.error.code !== ApiErrorCodes.PARSING_FAILED) {
        throw new Error("Error code is not `ApiErrorCodes.PARSING_FAILED`");
      }
    }
  });
});
