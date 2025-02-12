"use client";

import React from "react";

import { Dialog as DialogPrimitive } from "radix-ui";

import { cnM } from "@/utils/styles";

import { Button } from "../Button";
import { Icons } from "../Icons";

const Dialog = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = DialogPrimitive.Portal;

const DialogOverlay = ({
  ref,
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cnM(
      "bg-base-100/40 fixed inset-0 z-50 backdrop-blur-xs",
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className,
    )}
    {...props}
  />
);
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

interface DialogCloseProps
  extends React.ComponentProps<typeof DialogPrimitive.Close> {
  closeElement?: React.ReactNode;
}

const DialogClose = ({
  ref,
  className,
  closeElement = null,
  ...props
}: DialogCloseProps) => (
  <DialogPrimitive.Close
    ref={ref}
    className={cnM(
      "absolute top-4 right-4 opacity-70 transition-opacity hover:opacity-100 disabled:pointer-events-none",
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
);

DialogClose.displayName = DialogPrimitive.Close.displayName;

const DialogContent = ({
  ref,
  className,
  children,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content>) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cnM(
        "border-base-content/40 bg-base-100 fixed top-[50%] left-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-2 border p-8",
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-xl duration-200",
        className,
      )}
      {...props}
    >
      {children}
      <DialogClose />
    </DialogPrimitive.Content>
  </DialogPortal>
);
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogTitle = ({
  ref,
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cnM("headline-m", className)}
    {...props}
  />
);
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = ({
  ref,
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cnM("body-m", className)}
    {...props}
  />
);
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
