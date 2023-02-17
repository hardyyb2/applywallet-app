"use client";

import { cloneElement, ReactElement } from "react";

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
      await navigator.clipboard.writeText(text);
      onSuccess();
    } catch (err: any) {
      onFailure(err);
    }
  };

  return cloneElement(action, { onClick: handleClick });
}

export { CopyToClipboard };
