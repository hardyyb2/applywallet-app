"use client";

import { useRef, type PropsWithChildren } from "react";

import { useBoolean, useFullscreen } from "react-use";

import { Button } from "~/components/ds/Button";
import { Icons } from "~/components/ds/Icons";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ds/Tooltip";

import { useBreakPoint } from "@/hooks/useBreakPoint";
import { cnM } from "@/utils/styles";

const DFBWrapper = ({ children }: PropsWithChildren) => {
  const containerRef = useRef<any>(undefined);
  const { isAboveLg } = useBreakPoint("lg");
  const [show, toggleFullScreen] = useBoolean(false);
  const isFullScreen = useFullscreen(containerRef, show, {
    onClose: () => toggleFullScreen(false),
  });

  return (
    <div
      ref={containerRef}
      className={cnM("relative flex-1 bg-base-content/10")}
    >
      <TooltipProvider delayDuration={600}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              aria-label="toggle full screen"
              className="absolute bottom-2xs right-2xs z-40"
              startIcon={
                isFullScreen ? (
                  <Icons.Minimize className="lg:h-l lg:w-l" />
                ) : (
                  <Icons.Maximize className="lg:h-l lg:w-l" />
                )
              }
              onClick={toggleFullScreen}
            >
              {isAboveLg ? "full screen" : null}
            </Button>
          </TooltipTrigger>
          <TooltipContent sideOffset={12}>
            {isFullScreen ? "exit full screen" : "toggle full screen"}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      {children}
    </div>
  );
};

export { DFBWrapper };
