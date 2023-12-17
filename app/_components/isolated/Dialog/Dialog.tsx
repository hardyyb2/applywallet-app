"use client";

import React from "react";

import * as DialogPrimitive from "@radix-ui/react-dialog";

import { cnMerge } from "@/utils/styles";

import { Button } from "../Button";
import { Icons } from "../Icons";
import { typographyVariants } from "../Typography";

const Dialog = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = DialogPrimitive.Portal;

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cnMerge(
      "fixed inset-0 z-50 bg-base-100/40 backdrop-blur-sm",
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className,
    )}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

interface DialogCloseProps
  extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Close> {
  closeElement?: React.ReactNode;
}

const DialogClose = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Close>,
  DialogCloseProps
>(({ className, closeElement = null, ...props }, ref) => (
  <DialogPrimitive.Close
    ref={ref}
    className={cnMerge(
      "absolute right-4 top-4 opacity-70 transition-opacity hover:opacity-100 disabled:pointer-events-none",
      className,
    )}
    asChild
    {...props}
  >
    {closeElement ?? (
      <Button color="ghost" shape="square" size="sm">
        <Icons.X />
      </Button>
    )}
  </DialogPrimitive.Close>
));

DialogClose.displayName = DialogPrimitive.Close.displayName;

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cnMerge(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-2 border border-base-content/40 bg-base-100 p-8 ",
        "rounded-xl duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]",
        className,
      )}
      {...props}
    >
      {children}
      <DialogClose />
    </DialogPrimitive.Content>
  </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cnMerge(typographyVariants({ variant: "h5" }), className)}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cnMerge(typographyVariants({ variant: "body1" }), className)}
    {...props}
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogDescription,
};
