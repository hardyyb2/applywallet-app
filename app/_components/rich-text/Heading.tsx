import React from "react";

import { PlateElement, type PlateElementProps } from "@udecode/plate-common";
import { cva, type VariantProps } from "cva";

const headingVariants = cva("", {
  variants: {
    variant: {
      h1: "mb-1 mt-[2em] font-primary text-4xl font-bold",
      h2: "mb-px mt-[1.4em] font-primary text-2xl font-semibold tracking-tight",
      h3: "mb-px mt-[1em] font-primary text-xl font-semibold tracking-tight",
      h4: "mt-[0.75em] font-primary text-lg font-semibold tracking-tight",
      h5: "mt-[0.75em] text-lg font-semibold tracking-tight",
      h6: "mt-[0.75em] text-base font-semibold tracking-tight",
    },
    isFirstBlock: {
      true: "mt-0",
      false: "",
    },
  },
});

function Heading({
  className,
  variant = "h1",
  isFirstBlock,
  children,
  ...props
}: PlateElementProps & VariantProps<typeof headingVariants>) {
  const { element, editor } = props;

  const Element = variant!;

  return (
    <PlateElement
      asChild
      className={headingVariants({
        variant,
        className,
        isFirstBlock: element === editor.children[0],
      })}
      {...props}
    >
      <Element>{children}</Element>
    </PlateElement>
  );
}

export { Heading };
