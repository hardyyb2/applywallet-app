"use client";

import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementRef,
} from "react";

import type { VariantProps } from "cva";
import { Avatar as AvatarPrimitive } from "radix-ui";

import { cnM } from "@/utils/styles";

import { avatarVariants } from "./avatar.utils";

export interface AvatarProps
  extends Omit<ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>, "color">,
    VariantProps<typeof avatarVariants> {}

const Avatar = forwardRef<ElementRef<typeof AvatarPrimitive.Root>, AvatarProps>(
  ({ className, shape, size, color, border, ...props }, ref) => (
    <AvatarPrimitive.Root
      ref={ref}
      className={cnM(
        avatarVariants({
          color,
          border,
          shape,
          size,
          className,
        }),
      )}
      {...props}
    />
  ),
);

Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = forwardRef<
  ElementRef<typeof AvatarPrimitive.Image>,
  ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cnM("h-full w-full", className)}
    {...props}
  />
));

AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = forwardRef<
  ElementRef<typeof AvatarPrimitive.Fallback>,
  ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cnM(
      "flex aspect-square h-full w-full items-center justify-center rounded-full",
      className,
    )}
    {...props}
  />
));

AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarImage, AvatarFallback };
