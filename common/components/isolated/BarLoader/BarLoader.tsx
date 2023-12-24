"use client";

import { m, type HTMLMotionProps, type Variants } from "framer-motion";

import { cnM } from "@/utils/styles";

interface BarLoaderProps extends HTMLMotionProps<"div"> {
  barClassName?: string;
}

const variants: Variants = {
  initial: {
    scaleY: 0.5,
    opacity: 0,
  },
  animate: {
    scaleY: 1,
    opacity: 1,
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 1,
      ease: "circIn",
    },
  },
};

const BarLoader = ({
  barClassName = "",
  className = "",
  ...rest
}: BarLoaderProps) => {
  return (
    <m.div
      transition={{
        staggerChildren: 0.25,
      }}
      initial="initial"
      animate="animate"
      {...rest}
      className={cnM("flex h-full w-full gap-1", className)}
    >
      <m.div
        variants={variants}
        className={cnM("h-2xl w-xs bg-base-content", barClassName)}
      />
      <m.div
        variants={variants}
        className={cnM("h-2xl w-xs bg-base-content", barClassName)}
      />
      <m.div
        variants={variants}
        className={cnM("h-2xl w-xs bg-base-content", barClassName)}
      />
      <m.div
        variants={variants}
        className={cnM("h-2xl w-xs bg-base-content", barClassName)}
      />
      <m.div
        variants={variants}
        className={cnM("h-2xl w-xs bg-base-content", barClassName)}
      />
    </m.div>
  );
};

export { BarLoader };
