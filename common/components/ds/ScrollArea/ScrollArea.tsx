"use client";

import { type ComponentPropsWithoutRef, type ElementRef } from "react";

import { ScrollArea as ScrollAreaPrimitive } from "radix-ui";

import { cnM } from "@/utils/styles";

const ScrollAreaCorner = ScrollAreaPrimitive.Corner;

const ScrollBar = ({
  ref,
  className,
  orientation = "vertical",
  ...props
}: ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar> & {
  ref: React.RefObject<
    ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
  >;
}) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar
    ref={ref}
    orientation={orientation}
    className={cnM(
      // TODO - add variants
      "flex bg-base-100",
      orientation === "vertical" && "h-full w-2xs p-0.5",
      orientation === "horizontal" && "h-2xs p-0.5",
      className,
    )}
    {...props}
  >
    <ScrollAreaPrimitive.ScrollAreaThumb
      className={cnM(
        "relative rounded-full bg-base-content",
        orientation === "vertical" && "flex-1",
      )}
    />
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
);

ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;

const ScrollAreaViewport = ({
  ref,
  className,
  ...props
}: ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root> & {
  ref: React.RefObject<ElementRef<typeof ScrollAreaPrimitive.Root>>;
}) => {
  return (
    <ScrollAreaPrimitive.Viewport
      ref={ref}
      className={cnM("h-full w-full rounded-[inherit]", className)}
      {...props}
    />
  );
};

ScrollAreaViewport.displayName =
  ScrollAreaPrimitive.ScrollAreaViewport.displayName;

const ScrollArea = ({
  ref,
  className,
  ...props
}: ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root> & {
  ref: React.RefObject<ElementRef<typeof ScrollAreaPrimitive.Root>>;
}) => (
  <ScrollAreaPrimitive.Root
    ref={ref}
    className={cnM("relative overflow-hidden", className)}
    {...props}
  />
);

ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;

export { ScrollArea, ScrollAreaViewport, ScrollBar, ScrollAreaCorner };
