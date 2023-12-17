"use client";

import React from "react";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { type LucideIcon } from "lucide-react";

import { cnMerge } from "@/utils/styles";

import { Icons } from "../Icons";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cnMerge("border-b text-h5", className)}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> & {
    icon?: LucideIcon;
    showIcon?: boolean;
  }
>(
  (
    {
      className,
      children,
      icon: Icon = Icons.ChevronDown,
      showIcon = true,
      ...props
    },
    ref,
  ) => (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cnMerge(
          "flex flex-1 items-center justify-between py-4 text-body1 font-medium",
          className,
        )}
        {...props}
      >
        {children}
        {showIcon ? <Icon /> : null}
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  ),
);
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content> & {
    innerClassName?: string;
  }
>(({ className, innerClassName, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cnMerge(
      "overflow-hidden text-body1 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
      className,
    )}
    {...props}
  >
    <div className={cnMerge("pb-4 pt-0", innerClassName)}>{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
