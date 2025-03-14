"use client";

import * as React from "react";

import { cva, type VariantProps } from "cva";
import { Dialog as SheetPrimitive } from "radix-ui";

import { cnM } from "@/utils/styles";

import { Button } from "../Button";
import { Icons } from "../Icons";

const Sheet = SheetPrimitive.Root;

const SheetTrigger = SheetPrimitive.Trigger;

const SheetClose = SheetPrimitive.Close;

const SheetPortal = SheetPrimitive.Portal;

const SheetOverlay = ({
  ref,
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Overlay>) => (
  <SheetPrimitive.Overlay
    className={cnM(
      "bg-neutral/80 fixed inset-0 z-50",
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className,
    )}
    {...props}
    ref={ref}
  />
);
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;

const sheetVariants = cva(
  cnM(
    "border-base-content/40 bg-base-100 fixed z-50 gap-4 transition ease-in-out",
    "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-200 data-[state=open]:duration-300",
  ),
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top-100 data-[state=open]:slide-in-from-top-100",
        bottom:
          "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom-100 data-[state=open]:slide-in-from-bottom-100",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left-100 data-[state=open]:slide-in-from-left-100 md:max-w-lg",
        right:
          "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right-100 data-[state=open]:slide-in-from-right-100 md:max-w-lg",
      },
    },
    defaultVariants: {
      side: "right",
    },
  },
);

interface SheetContentProps
  extends React.ComponentProps<typeof SheetPrimitive.Content>,
    VariantProps<typeof sheetVariants> {
  showClose?: boolean;
}

const SheetContent = ({
  ref,
  side = "right",
  className,
  children,
  showClose = true,
  ...props
}: SheetContentProps) => (
  <SheetPrimitive.Content
    ref={ref}
    className={cnM(sheetVariants({ side }), className)}
    {...props}
  >
    {children}
    {showClose ? (
      <SheetPrimitive.Close
        asChild
        className="absolute top-4 right-4 opacity-70 transition-opacity hover:opacity-100 disabled:pointer-events-none"
      >
        <Button color="ghost" shape="square" size="md">
          <Icons.X />
        </Button>
      </SheetPrimitive.Close>
    ) : null}
  </SheetPrimitive.Content>
);
SheetContent.displayName = SheetPrimitive.Content.displayName;

const SheetHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cnM(
      "gap-3xs p-s flex flex-col text-center sm:text-left",
      className,
    )}
    {...props}
  />
);
SheetHeader.displayName = "SheetHeader";

const SheetFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cnM(
      "gap-2xs border-base-content/40 bg-base-100 p-xs absolute inset-x-0 bottom-0 flex border-t",
      className,
    )}
    {...props}
  />
);
SheetFooter.displayName = "SheetFooter";

const SheetTitle = ({
  ref,
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Title>) => (
  <SheetPrimitive.Title
    ref={ref}
    className={cnM("title-m lg:title-l", className)}
    {...props}
  />
);
SheetTitle.displayName = SheetPrimitive.Title.displayName;

const SheetDescription = ({
  ref,
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Description>) => (
  <SheetPrimitive.Description
    ref={ref}
    className={cnM("label-xs lg:label-m", className)}
    {...props}
  />
);
SheetDescription.displayName = SheetPrimitive.Description.displayName;

export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
};
