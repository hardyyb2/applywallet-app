import { Storage } from "@plasmohq/storage";

import { envVars } from "@/utils/env-vars";

chrome.runtime.onInstalled.addListener(async () => {
  const URL = envVars.PLASMO_PUBLIC_API_URL;

  // TODO - replace with axios when it has a proper fetch adapter, "axios-fetch-adapter" does not work

  try {
    const res = await fetch(`${URL}/shared/open`, {
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
  } catch (error) {
    // TODO - do something with error
  }
});

export {};
