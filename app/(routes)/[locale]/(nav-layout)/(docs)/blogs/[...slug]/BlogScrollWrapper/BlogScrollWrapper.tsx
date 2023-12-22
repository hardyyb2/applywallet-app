"use client";

import { useRef, type ElementRef, type PropsWithChildren } from "react";

import { m, useScroll, useSpring } from "framer-motion";
import { useBoolean, useFullscreen } from "react-use";

import { Button } from "@/components/isolated/Button";
import { Flex } from "@/components/isolated/Flex";
import { Icons } from "@/components/isolated/Icons";
import {
  ScrollArea,
  ScrollAreaCorner,
  ScrollAreaViewport,
  ScrollBar,
} from "@/components/isolated/ScrollArea";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/isolated/Tooltip";
import { cnM } from "@/utils/styles";

const BlogScrollWrapper = ({ children }: PropsWithChildren) => {
  // hooks
  const containerRef = useRef<ElementRef<typeof ScrollArea>>(null);
  const viewportRef = useRef<ElementRef<typeof ScrollAreaViewport>>(null);

  const [show, toggleFullScreen] = useBoolean(false);
  const isFullScreen = useFullscreen(containerRef, show, {
    onClose: () => toggleFullScreen(false),
  });
  const { scrollYProgress } = useScroll({
    container: viewportRef,
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 24,
  });

  return (
    <ScrollArea
      type="always"
      ref={containerRef}
      className={cnM("relative h-full w-full rounded-2xl bg-base-100")}
    >
      <ScrollAreaViewport
        ref={viewportRef}
        className="mx-auto flex p-m-l [&>div]:!block"
      >
        <m.div
          className="fixed inset-0 z-40 h-3xs-2xs origin-[0%] transform rounded-full bg-accent"
          style={{
            scaleX,
          }}
        />

        <Flex direction="column" align="center">
          <TooltipProvider delayDuration={600}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  aria-label="toggle full screen"
                  color="ghost"
                  className="absolute right-xs top-0 z-40 p-0 lg:top-2xs"
                  startIcon={
                    isFullScreen ? (
                      <Icons.Minimize className="lg:h-l lg:w-l" />
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
        </Flex>
      </ScrollAreaViewport>
      <ScrollBar className="rounded-xl" />
      <ScrollAreaCorner />
    </ScrollArea>
  );
};

export { BlogScrollWrapper };
