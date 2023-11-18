import React from "react";
import dynamic from "next/dynamic";

import type { VariantProps } from "cva";
import { type Props as BaseSelectProps } from "react-select";

import { cnMerge } from "@/utils/styles";

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
        control: (state) =>
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
            state.isFocused
              ? [
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
                ]
              : null,
          ),
        input: () => cnMerge("text-[1rem]"),
      }}
      {...restProps}
    />
  );
};

export { Select, type SelectProps };
