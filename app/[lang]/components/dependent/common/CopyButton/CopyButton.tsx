"use client";

import { useEffect, useState } from "react";

import {
  CopyToClipboard,
  CopyToClipboardProps,
} from "@/components/isolated/common";
import { Button } from "@/components/isolated/wrapped";

import { copyButtonIcons } from "./copyButton.utils";

/** Timeout for clearing setTimeout in case component is unmounted  */
const timeoutId = null;

type CopyButtonProps = Omit<CopyToClipboardProps, "action">;

const CopyButton = (props: CopyButtonProps) => {
  const [buttonState, setButtonState] = useState<"copy" | "copied">("copy");

  const handleCopySuccess = () => {
    setButtonState("copied");

    setTimeout(() => {
      setButtonState("copy");
    }, 2000);
  };

  useEffect(() => {
    return () => {
      timeoutId && clearTimeout(timeoutId);
    };
  }, []);

  return (
    <CopyToClipboard
      {...props}
      onSuccess={handleCopySuccess}
      action={
        <Button
          color={buttonState === "copy" ? "secondary" : "accent"}
          className="gap-1 prose text-secondary-content"
          size="sm"
        >
          {copyButtonIcons?.[buttonState]}
        </Button>
      }
    />
  );
};

export { CopyButton };
