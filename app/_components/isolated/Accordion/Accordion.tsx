"use client";

import React from "react";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { type LucideIcon } from "lucide-react";

import { cnMerge } from "@/utils/styles";

import { Icons } from "../Icons";
import { typographyVariants } from "../Typography";

type AccordionContextType = {
  variant?: "boxed" | "bordered-bottom" | "bordered";
};

const AccordionContext = React.createContext<AccordionContextType>({
  variant: "boxed",
});

const useAccordionContext = () => {
  const context = React.useContext(AccordionContext);
  if (!context) {
    throw new Error(
      "useAccordionContext must be used within a AccordionContextProvider",
    );
  }
  return context;
};

type AccordionProps = React.ComponentPropsWithoutRef<
  typeof AccordionPrimitive.Root
> &
  AccordionContextType;

const Accordion = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Root>,
  AccordionProps
>(({ variant = "boxed", className, ...props }, ref) => {
  return (
    <AccordionContext.Provider value={{ variant }}>
      <AccordionPrimitive.Root
        ref={ref}
        {...props}
        className={cnMerge(
          {
            "space-y-3xs": variant === "boxed" || variant === "bordered",
          },
          className,
        )}
      />
    </AccordionContext.Provider>
  );
});

Accordion.displayName = "Accordion";

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => {
  const { variant } = useAccordionContext();

  return (
    <AccordionPrimitive.Item
      ref={ref}
      className={cnMerge(
        typographyVariants({ variant: "title-s" }),
        {
          "rounded-xl bg-base-200": variant === "boxed",
          "border-b": variant === "bordered-bottom",
          "rounded-xl border ": variant === "bordered",
        },
        className,
      )}
      {...props}
    />
  );
});
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cnMerge(
        "flex flex-1 items-center justify-between p-2xs-xs",
        className,
      )}
      {...props}
    />
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content> & {
    innerClassName?: string;
  }
>(({ className, innerClassName, children, ...props }, ref) => {
  return (
    <AccordionPrimitive.Content
      ref={ref}
      className={cnMerge(
        "overflow-hidden px-2xs-xs",
        "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
        className,
      )}
      {...props}
    >
      <div className={cnMerge("pb-4 pt-0", innerClassName)}>{children}</div>
    </AccordionPrimitive.Content>
  );
});
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
