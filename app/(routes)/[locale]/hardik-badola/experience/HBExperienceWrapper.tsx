"use client";

import { useRef, type ComponentRef, type PropsWithChildren } from "react";

import { motion, useScroll, useSpring } from "motion/react";

import { Flex } from "~/components/ds/Flex";
import {
  ScrollArea,
  ScrollAreaCorner,
  ScrollAreaViewport,
  ScrollBar,
} from "~/components/ds/ScrollArea";

import { cnM } from "@/utils/styles";

const HBExperienceWrapper = ({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) => {
  const viewportRef = useRef<ComponentRef<typeof ScrollAreaViewport>>(null);
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
      className={cnM("bg-base-100 relative h-full w-full", className)}
    >
      <ScrollAreaViewport
        ref={viewportRef}
        className="p-m-l pt-s mx-auto flex [&>div]:block!"
      >
        <motion.div
          className="h-4xs bg-secondary absolute inset-0 z-40 origin-[0%] transform"
          style={{
            scaleX,
          }}
        />

        <Flex direction="column" align="center">
          {children}
        </Flex>
      </ScrollAreaViewport>
      <ScrollBar className="hidden" />
      <ScrollAreaCorner />
    </ScrollArea>
  );
};

export { HBExperienceWrapper };
