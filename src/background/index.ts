import { Storage } from "@plasmohq/storage";

const addOptionsToContextMenu = () => {
  const rootOptionId = chrome.contextMenus.create({
    title: "applywallet",
    contexts: ["editable"],
    // TODO - add all valid urls
    documentUrlPatterns: ["http://localhost:*/*", "*://*.google.com/*"],
    id: "applywallet",
  });

  chrome.contextMenus.create({
    title: "subitem",
    contexts: ["editable"],
    // TODO - add all valid urls
    documentUrlPatterns: ["http://localhost:*/*", "*://*.google.com/*"],
    parentId: rootOptionId,
    id: "subitem",
  });

  chrome.contextMenus.onClicked.addListener((info, tab) => {});
};

chrome.runtime.onInstalled.addListener(async () => {
  const URL = process.env.PLASMO_PUBLIC_API_URL;

  // TODO - replace with axios when it has a proper fetch adapter, "axios-fetch-adapter" does not work

  try {
    const res = await fetch(`${URL}/api/shared/open`, {
      method: "GET",
      credentials: "include",
    });
    const data = await res.json();

    // TODO - parse data using zod
    const storage = new Storage();
    await storage.set("auto-fill", {
      company: "apollo.io",
      job_description: "this is a job description",
    });

    addOptionsToContextMenu();
  } catch (error) {
    // TODO - do something with error
  }
});

export {};
