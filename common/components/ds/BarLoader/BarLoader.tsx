"use client";

import type { HTMLAttributes } from "react";

import { cnM } from "@/utils/styles";

import { Flex } from "../Flex";

interface BarLoaderProps extends HTMLAttributes<HTMLDivElement> {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  fill?: boolean;
}

const BarLoader = ({
  className = "",
  size = "xl",
  fill = true,
  ...rest
}: BarLoaderProps) => {
  const content = (
    <div
      {...rest}
      className={cnM(
        "d-loading d-loading-bars",
        {
          "d-loading-xs": size === "xs",
          "d-loading-sm": size === "sm",
          "d-loading-md": size === "md",
          "d-loading-lg": size === "lg",
          "d-loading-xl": size === "xl",
        },
        className,
      )}
    />
  );

  if (fill) {
    return (
      <Flex className="h-full w-full" align="center" justify="center">
        {content}
      </Flex>
    );
  }

  return content;
};

export { BarLoader };
