"use client";

import { useRef, type ComponentRef, type PropsWithChildren } from "react";

import { m, useScroll, useSpring } from "motion/react";
import { useBoolean, useFullscreen } from "react-use";

import { Button } from "~/components/ds/Button";
import { Flex } from "~/components/ds/Flex";
import { Icons } from "~/components/ds/Icons";
import {
  ScrollArea,
  ScrollAreaCorner,
  ScrollAreaViewport,
  ScrollBar,
} from "~/components/ds/ScrollArea";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ds/Tooltip";

import { cnM } from "@/utils/styles";

const BlogScrollWrapper = ({ children }: PropsWithChildren) => {
  // hooks
  const containerRef = useRef<ComponentRef<typeof ScrollArea>>(null);
  const viewportRef = useRef<ComponentRef<typeof ScrollAreaViewport>>(null);

  const [show, toggleFullScreen] = useBoolean(false);
  // @ts-expect-error
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
      className={cnM("relative h-full w-full bg-base-100")}
    >
      <ScrollAreaViewport
        ref={viewportRef}
        className="mx-auto flex p-m-l [&>div]:!block"
      >
        <m.div
          className="absolute inset-0 z-40 h-3xs origin-[0%] transform bg-secondary"
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
