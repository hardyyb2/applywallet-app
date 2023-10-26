export {};

chrome.runtime.onInstalled.addListener(() => {
  const URL = process.env.PLASMO_PUBLIC_API_URL;

  fetch(`${URL}/shared/open`, {
    method: "GET",
    credentials: "include",
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
    });
});
