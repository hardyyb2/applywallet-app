"use client";

import { ScrollArea } from "@/app/components/isolated/wrapped";
import { PropsWithChildren } from "react";

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
