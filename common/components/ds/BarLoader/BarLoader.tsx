"use client";

import type { HTMLAttributes } from "react";

import { cnM } from "@/utils/styles";

interface BarLoaderProps extends HTMLAttributes<HTMLDivElement> {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}

const BarLoader = ({
  className = "",
  size = "xl",
  ...rest
}: BarLoaderProps) => {
  return (
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
};

export { BarLoader };
