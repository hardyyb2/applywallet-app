"use client";

import { cloneElement, ReactElement } from "react";

import { fallbackCopyToClipboard } from "./copyToClipboard.utils";

export interface CopyToClipboardProps {
  text: string;
  action: ReactElement;
  onSuccess?: () => void;
  onFailure?: (err: any) => void;
}

function CopyToClipboard({
  text,
  action,
  onSuccess = () => null,
  onFailure = () => null,
}: CopyToClipboardProps) {
  const handleClick = async () => {
    try {
      navigator?.vibrate([50]);

      if (navigator?.clipboard) {
        await navigator.clipboard.writeText(text);
      } else {
        await fallbackCopyToClipboard(text);
      }
      onSuccess();
    } catch (err: unknown) {
      onFailure(err);
    }
  };

  return cloneElement(action, { onClick: handleClick });
}

export { CopyToClipboard };
