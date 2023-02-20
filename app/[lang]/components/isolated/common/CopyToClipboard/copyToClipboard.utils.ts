export const fallbackCopyToClipboard = async (text: string) => {
  if (
    document?.queryCommandSupported &&
    document?.queryCommandSupported("copy")
  ) {
    var textarea = document.createElement("textarea");
    textarea.textContent = text;
    textarea.style.position = "fixed";
    textarea.classList.add("sr-only");
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    /** Prevent keyboard on mobile from opening because of focus*/
    textarea.readOnly = true;

    return document?.execCommand("copy");
  }
};
