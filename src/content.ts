chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "getClickedElement") {
    const clickedElement = document.activeElement;
    // Now you can interact with the clicked element
    if (
      clickedElement instanceof HTMLInputElement ||
      clickedElement instanceof HTMLTextAreaElement
    ) {
      clickedElement.value = "hello";
    }
  }
  return true;
});
