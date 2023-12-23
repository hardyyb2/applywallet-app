import React from "react";

import { PlateElement, type PlateElementProps } from "@udecode/plate-common";
import { cva, type VariantProps } from "cva";

import { cnM } from "@/utils/styles";

const listVariants = cva("m-0 ps-6", {
  variants: {
    variant: {
      ul: "list-disc [&_ul]:list-[circle] [&_ul_ul]:list-[square]",
      ol: "list-decimal",
    },
  },
});

export function ListElement({
  className,
  children,
  variant = "ul",
  ...props
}: PlateElementProps & VariantProps<typeof listVariants>) {
  const Element = variant!;

  return (
    <PlateElement
      asChild
      className={cnM(listVariants({ variant }), className)}
      {...props}
    >
      <Element>{children}</Element>
    </PlateElement>
  );
}
