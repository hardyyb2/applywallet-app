"use client";

import { PropsWithChildren } from "react";

import { ScrollArea } from "@/components/isolated/wrapped";

const BaseScrollbar = ({ children }: PropsWithChildren) => {
  return (
    <ScrollArea.Root className="h-full">
      <ScrollArea.Viewport className="w-full h-full [&>div]:h-full">
        {children}
      </ScrollArea.Viewport>
    </ScrollArea.Root>
  );
};

export { BaseScrollbar };
