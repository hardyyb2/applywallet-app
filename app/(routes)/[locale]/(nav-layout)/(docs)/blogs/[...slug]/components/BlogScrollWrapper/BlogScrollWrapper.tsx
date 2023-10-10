"use client";

import { ElementRef, PropsWithChildren, useRef } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { m, useScroll, useSpring } from "framer-motion";

import { Flex } from "@/components/ui/isolated/common";
import {
  Button,
  ScrollArea,
  ScrollAreaCorner,
  ScrollAreaViewport,
  ScrollBar,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/isolated/wrapped";
import { Icons } from "@/components/ui/isolated/wrapped/Icons";
import { SearchParams } from "@/utils/routes.utils";
import { cnMerge } from "@/utils/styles.utils";

const BlogScrollWrapper = ({ children }: PropsWithChildren) => {
  // hooks
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();
  const viewportRef = useRef<ElementRef<typeof ScrollAreaViewport>>(null);
  const { scrollYProgress } = useScroll({
    container: viewportRef,
  });

  // constants
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 24,
  });
  const isFullScreen = searchParams.has(SearchParams.FULL_SCREEN);

  // functions
  const handleFullScreenToggle = () => {
    const params = new URLSearchParams(searchParams);

    if (isFullScreen) {
      params.delete(SearchParams.FULL_SCREEN);
      router.replace(pathName + "?" + params.toString());
    } else {
      params.set(SearchParams.FULL_SCREEN, "true");
      router.push(pathName + "?" + params.toString());
    }
  };

  return (
    <ScrollArea
      type="always"
      className={cnMerge(
        "relative h-full w-full rounded-2xl bg-base-100",
        isFullScreen && "!fixed inset-0 z-50 rounded-none",
      )}
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
                  startIcon={<Icons.Maximize className="lg:h-l lg:w-l" />}
                  onClick={handleFullScreenToggle}
                />
              </TooltipTrigger>
              <TooltipContent sideOffset={12}>
                toggle full screen
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
