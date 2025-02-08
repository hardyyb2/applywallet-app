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

import { cnM } from "@/utils/styles";

const DFBWrapper = ({ children }: PropsWithChildren) => {
  const containerRef = useRef<any>(undefined);
  const [show, toggleFullScreen] = useBoolean(false);
  const isFullScreen = useFullscreen(containerRef, show, {
    onClose: () => toggleFullScreen(false),
  });

  return (
    <div
      ref={containerRef}
      className={cnM("relative flex-1 rounded-2xl bg-base-content/20")}
    >
      <TooltipProvider delayDuration={600}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              aria-label="toggle full screen"
              color="ghost"
              className="absolute right-xs top-0 z-40 p-0 lg:top-2xs"
              startIcon={
                isFullScreen ? (
                  <Icons.Minimize
                    className={cnM(
                      "lg:h-l lg:w-l",
                      isFullScreen && "stroke-secondary",
                    )}
                  />
                ) : (
                  <Icons.Maximize className="lg:h-l lg:w-l" />
                )
              }
              onClick={toggleFullScreen}
            />
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
