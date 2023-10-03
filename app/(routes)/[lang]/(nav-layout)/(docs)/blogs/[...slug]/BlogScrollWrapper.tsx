"use client";

import { ElementRef, PropsWithChildren, useRef } from "react";

import { m, useScroll, useSpring } from "framer-motion";

const BlogScrollWrapper = ({ children }: PropsWithChildren) => {
  const containerRef = useRef<ElementRef<"main">>(null);
  const { scrollYProgress } = useScroll({
    container: containerRef,
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 24,
  });

  return (
    <main
      ref={containerRef}
      className="relative h-full w-full overflow-y-auto rounded-2xl"
    >
      <m.div
        className="sticky inset-0 z-[2] h-3xs-2xs origin-[0%] transform rounded-full bg-accent"
        style={{
          scaleX,
        }}
      />
      {children}
    </main>
  );
};

export { BlogScrollWrapper };
