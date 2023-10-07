"use client";

import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";

import { cnMerge } from "@/utils/styles.utils";

const ScrollAreaCorner = ScrollAreaPrimitive.Corner;

const ScrollBar = forwardRef<
  ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
>(({ className, orientation = "vertical", ...props }, ref) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar
    ref={ref}
    orientation={orientation}
    className={cnMerge(
      // TODO - add variants
      "flex bg-base-100",
      orientation === "vertical" && "h-full w-2xs-xs p-[1px]",
      orientation === "horizontal" && "h-2xs-xs p-[1px]",
      className,
    )}
    {...props}
  >
    <ScrollAreaPrimitive.ScrollAreaThumb
      className={cnMerge(
        "relative rounded-full bg-base-content",
        orientation === "vertical" && "flex-1",
      )}
    />
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
));

ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;

const ScrollAreaViewport = forwardRef<
  ElementRef<typeof ScrollAreaPrimitive.Root>,
  ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <ScrollAreaPrimitive.Viewport
      ref={ref}
      className={cnMerge(" h-full w-full rounded-[inherit]", className)}
      {...props}
    />
  );
});

ScrollAreaViewport.displayName =
  ScrollAreaPrimitive.ScrollAreaViewport.displayName;

const ScrollArea = forwardRef<
  ElementRef<typeof ScrollAreaPrimitive.Root>,
  ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
>(({ className, ...props }, ref) => (
  <ScrollAreaPrimitive.Root
    ref={ref}
    className={cnMerge("relative overflow-hidden", className)}
    {...props}
  />
));

ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;

export { ScrollArea, ScrollAreaViewport, ScrollBar, ScrollAreaCorner };
