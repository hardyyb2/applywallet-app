"use client";

import React from "react";

import {
  PlateElement,
  type PlateElementProps,
  type Value,
} from "@udecode/plate-common";
import { useLink, type TLinkElement } from "@udecode/plate-link";

import { cnM } from "@/utils/styles";

const LinkElement = ({
  ref,
  className,
  children,
  ...props
}: PlateElementProps<Value, TLinkElement> & {
  ref: React.RefObject<React.ElementRef<typeof PlateElement>>;
}) => {
  const { props: linkProps } = useLink({ element: props.element });

  return (
    <PlateElement
      asChild
      ref={ref}
      className={cnM(
        "font-medium text-primary underline decoration-primary underline-offset-4",
        className,
      )}
      {...linkProps}
      {...(props as any)}
    >
      <a>{children}</a>
    </PlateElement>
  );
};
LinkElement.displayName = "LinkElement";

export { LinkElement };
