import { extApi } from "~/lib/extApi";

chrome.runtime.onInstalled.addListener(() => {
  extApi.get("/shared/open").then((res) => {
    console.log(res);
  });
});

export {};
