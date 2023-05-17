"use client";

import { useEffect, useMemo, useState } from "react";

import {
  CopyToClipboard,
  CopyToClipboardProps,
} from "app/components/ui/isolated/common";
import { Button, ButtonProps } from "app/components/ui/isolated/wrapped";

import { CopyButtonStateTypes } from "./copyButton.types";
import { copyButtonIcons } from "./copyButton.utils";

/** Timeout for clearing setTimeout in case component is unmounted  */
const timeoutId = null;

type CopyButtonProps = Omit<CopyToClipboardProps, "action">;

const CopyButton = (props: CopyButtonProps) => {
  const [buttonState, setButtonState] = useState<CopyButtonStateTypes>("copy");

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

  const conditionalButtonProps: ButtonProps = useMemo(() => {
    const copied = buttonState === "copied";

    return {
      variant: copied ? undefined : "outline",
      color: copied ? "accent" : "secondary",
      "data-tip": copied ? "copied" : "copy",
    };
  }, [buttonState]);

  return (
    <CopyToClipboard
      {...props}
      onSuccess={handleCopySuccess}
      action={
        <Button
          size="sm"
          className="flex gap-1 / prose text-secondary-content / tooltip"
          {...conditionalButtonProps}
        >
          {copyButtonIcons?.[buttonState]}
        </Button>
      }
    />
  );
};

export { CopyButton };
