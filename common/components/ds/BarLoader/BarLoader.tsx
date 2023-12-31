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
        "dui-loading dui-loading-bars",
        {
          "dui-loading-xs": size === "xs",
          "dui-loading-sm": size === "sm",
          "dui-loading-md": size === "md",
          "dui-loading-lg": size === "lg",
          "dui-loading-xl": size === "xl",
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
