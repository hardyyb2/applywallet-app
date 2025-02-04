"use client";

import {
  type ComponentProps,
  type ComponentPropsWithoutRef,
  type ElementRef,
} from "react";

import type { VariantProps } from "cva";
import { Avatar as AvatarPrimitive } from "radix-ui";

import { cnM } from "@/utils/styles";

import { avatarVariants } from "./avatar.utils";

export interface AvatarProps
  extends Omit<ComponentProps<typeof AvatarPrimitive.Root>, "color">,
    VariantProps<typeof avatarVariants> {}

const Avatar = ({
  ref,
  className,
  shape,
  size,
  color,
  border,
  ...props
}: AvatarProps) => (
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
);

Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = ({
  ref,
  className,
  ...props
}: ComponentPropsWithoutRef<typeof AvatarPrimitive.Image> & {
  ref: React.RefObject<ElementRef<typeof AvatarPrimitive.Image>>;
}) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cnM("h-full w-full", className)}
    {...props}
  />
);

AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = ({
  ref,
  className,
  ...props
}: ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback> & {
  ref: React.RefObject<ElementRef<typeof AvatarPrimitive.Fallback>>;
}) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cnM(
      "flex aspect-square h-full w-full items-center justify-center rounded-full",
      className,
    )}
    {...props}
  />
);

AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarImage, AvatarFallback };
