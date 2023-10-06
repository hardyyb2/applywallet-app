"use client";

import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

import * as AvatarPrimitive from "@radix-ui/react-avatar";

import { cnMerge } from "@/utils/styles.utils";

const Avatar = forwardRef<
  ElementRef<typeof AvatarPrimitive.Root>,
  ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  // TODO - add various sizes
  <AvatarPrimitive.Root
    ref={ref}
    className={cnMerge("avatar aspect-square rounded-xl", className)}
    {...props}
  />
));

Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = forwardRef<
  ElementRef<typeof AvatarPrimitive.Image>,
  ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  // TODO - try to use next/image here or pass custom component for render
  <AvatarPrimitive.Image
    ref={ref}
    className={cnMerge("aspect-square h-full w-full", className)}
    {...props}
  />
));

AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = forwardRef<
  ElementRef<typeof AvatarPrimitive.Fallback>,
  ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  // TODO - update this
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cnMerge(
      "flex h-full w-full items-center justify-center rounded-full",
      className,
    )}
    {...props}
  />
));

AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarImage, AvatarFallback };
