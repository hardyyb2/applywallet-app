"use client";

import React from "react";

import { Accordion as AccordionPrimitive } from "radix-ui";

import { cnM } from "@/utils/styles";

import { Icons } from "../Icons";

type AccordionContextType = {
  variant?: "box" | "lined" | "bordered";
};

const AccordionContext = React.createContext<AccordionContextType>({
  variant: "box",
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

type AccordionProps = React.ComponentProps<typeof AccordionPrimitive.Root> &
  AccordionContextType;

const Accordion = ({
  ref,
  variant = "box",
  className,
  ...props
}: AccordionProps) => {
  return (
    <AccordionContext.Provider value={{ variant }}>
      <AccordionPrimitive.Root
        ref={ref}
        {...props}
        className={cnM(
          {
            "space-y-3xs": variant === "box" || variant === "bordered",
          },
          className,
        )}
      />
    </AccordionContext.Provider>
  );
};

Accordion.displayName = "Accordion";

const AccordionItem = ({
  ref,
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) => {
  const { variant } = useAccordionContext();

  return (
    <AccordionPrimitive.Item
      ref={ref}
      className={cnM(
        "title-s lg:title-m",
        {
          "rounded-xl bg-base-200": variant === "box",
          "border-b": variant === "lined",
          "rounded-xl border": variant === "bordered",
        },
        className,
      )}
      {...props}
    />
  );
};
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = ({
  ref,
  className,
  showIcon = true,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger> & {
  showIcon?: boolean;
}) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cnM(
        "flex flex-1 items-center justify-between p-2xs-xs transition-all [&[data-state=open]>svg]:rotate-180",
        className,
      )}
      {...props}
    >
      {children}
      {showIcon ? (
        <Icons.ChevronDown className="w-4 transition-transform duration-300 lg:w-6" />
      ) : null}
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
);
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = ({
  ref,
  className,
  innerClassName,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content> & {
  innerClassName?: string;
}) => {
  return (
    <AccordionPrimitive.Content
      ref={ref}
      className={cnM(
        "body-s lg:body-m",
        "overflow-hidden px-2xs-xs",
        "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
        className,
      )}
      {...props}
    >
      <div className={cnM("pb-4 pt-0", innerClassName)}>{children}</div>
    </AccordionPrimitive.Content>
  );
};
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  type AccordionProps,
};
