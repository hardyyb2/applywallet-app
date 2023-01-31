"use client";

import { ScrollArea } from "@/components/isolated/wrapped";
import { PropsWithChildren } from "react";

const BaseScrollbar = ({ children }: PropsWithChildren) => {
  return (
    <ScrollArea.Root>
      <ScrollArea.Viewport className="w-full h-full">
        {children}
      </ScrollArea.Viewport>
    </ScrollArea.Root>
  );
};

export { BaseScrollbar };
