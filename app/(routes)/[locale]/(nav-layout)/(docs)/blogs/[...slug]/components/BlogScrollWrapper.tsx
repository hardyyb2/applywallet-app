"use client";

import { ElementRef, PropsWithChildren, useRef } from "react";

import { m, useScroll, useSpring } from "framer-motion";

import {
  ScrollArea,
  ScrollAreaViewport,
  ScrollBar,
} from "@/components/ui/isolated/wrapped";

const BlogScrollWrapper = ({ children }: PropsWithChildren) => {
  const containerRef = useRef<ElementRef<typeof ScrollAreaViewport>>(null);
  const { scrollYProgress } = useScroll({
    container: containerRef,
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 24,
  });

  return (
    <ScrollArea className="h-full w-full rounded-xl">
      <ScrollAreaViewport
        ref={containerRef}
        className="mx-auto flex rounded-2xl bg-base-100 p-m-l [&>div]:!block"
      >
        <m.div
          className="fixed inset-0 z-40 h-3xs-2xs origin-[0%] transform rounded-full bg-accent"
          style={{
            scaleX,
          }}
        />
        {children}
      </ScrollAreaViewport>
      <ScrollBar />
    </ScrollArea>
  );
};

export { BlogScrollWrapper };
