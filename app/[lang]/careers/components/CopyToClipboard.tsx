"use client";

import { Children, cloneElement, Fragment, ReactElement, useRef } from "react";

function CopyToClipboard({ children }: { children: ReactElement[] }) {
  const textRef = useRef<HTMLElement>(null);

  const handleClick = async () => {
    try {
      const textToCopy = textRef?.current?.textContent ?? "";
      await navigator.clipboard.writeText(textToCopy);
      console.log("Text copied to clipboard");
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <Fragment>
      {Children.map(children, (child) => {
        if (child?.props?.["data-copy-target"]) {
          return cloneElement(child, { ref: textRef });
        }

        if (child?.props?.["data-copy-action"]) {
          return cloneElement(child, { onClick: handleClick });
        }

        return child;
      })}
    </Fragment>
  );
}

export { CopyToClipboard };
