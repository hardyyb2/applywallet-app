import React from "react";
import dynamic from "next/dynamic";

import type { VariantProps } from "cva";
import { type Props as BaseSelectProps } from "react-select";

import { cn, cnMerge } from "@/utils/styles";

import { Input } from "../Input";
import { selectVariants } from "./select.utils";

const BaseSelectNoSSR = dynamic(() => import("react-select"), {
  loading: () => <Input />,
  ssr: false,
});

interface SelectProps
  extends BaseSelectProps,
    VariantProps<typeof selectVariants> {}

const Select = ({
  size = "md",
  color,
  className = "",
  ...restProps
}: SelectProps) => {
  return (
    <BaseSelectNoSSR
      unstyled
      classNames={{
        control: () =>
          cnMerge(
            selectVariants({
              size,
              color,
            }),
            "pr-4",
          ),
        container: (state) =>
          cnMerge(
            "bg-base-100 rounded-btn",
            state.isFocused && [
              "outline outline-2 outline-offset-2 outline-base-content/20",
              {
                "outline-primary": color === "primary",
                "outline-secondary": color === "secondary",
                "outline-accent": color === "accent",
                "outline-success": color === "success",
                "outline-warning": color === "warning",
                "outline-error": color === "error",
                "outline-info": color === "info",
              },
            ],
          ),
        valueContainer: () => cn("text-[1rem]"),
        placeholder: () => cn("text-[#9ca3af] opacity-75"),
        menu: () => cn("bg-base-100 mt-2 rounded-btn p-2"),
        menuList: () => cn("space-y-2"),
        option: (state) =>
          cnMerge(
            "p-2 text-base-content rounded-btn !cursor-pointer",
            !state.isSelected && "hover:bg-base-200",
            state.isFocused && "bg-base-200",
            state.isSelected && [
              " font-semibold",
              {
                "bg-primary text-primary-content":
                  color === "primary" || !color,
                "bg-secondary text-secondary-content": color === "secondary",
                "bg-accent text-accent-content": color === "accent",
                "bg-success text-success-content": color === "success",
                "bg-warning text-warning-content": color === "warning",
                "bg-error text-error-content": color === "error",
                "bg-info text-info-content": color === "info",
              },
            ],
          ),
      }}
      {...restProps}
    />
  );
};

export { Select, type SelectProps };
