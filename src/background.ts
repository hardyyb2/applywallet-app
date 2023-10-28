import { ApiRoutes } from "@/utils/routes.utils";

import { extApi } from "$/lib/extApi";

chrome.runtime.onInstalled.addListener(() => {
  extApi.get(`${ApiRoutes.SHARED}/open`).then((res) => {
    console.log(res);
  });
});

export {};
