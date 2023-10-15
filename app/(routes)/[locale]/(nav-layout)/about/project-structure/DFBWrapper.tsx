"use client";

import { PropsWithChildren, useRef } from "react";

import { useBoolean, useFullscreen } from "react-use";

import {
  Button,
  Icons,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/isolated";
import { cnMerge } from "@/utils/styles.utils";

const DFBWrapper = ({ children }: PropsWithChildren) => {
  const containerRef = useRef<any>();
  const [show, toggleFullScreen] = useBoolean(false);
  const isFullScreen = useFullscreen(containerRef, show, {
    onClose: () => toggleFullScreen(false),
  });

  return (
    <div
      ref={containerRef}
      className={cnMerge(
        "relative flex-1 rounded-2xl bg-base-content/20",
        isFullScreen && "bg-base-content",
      )}
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
                    className={cnMerge(
                      "lg:h-l lg:w-l",
                      isFullScreen && "stroke-base-100",
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
