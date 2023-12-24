"use client";

import React from "react";
import dynamic from "next/dynamic";

import type { VariantProps } from "cva";
import {
  components as Components,
  type Props as BaseSelectProps,
} from "react-select";

import { cn, cnM } from "@/utils/styles";

import { Icons } from "../Icons";
import { Input } from "../Input";
import { selectVariants } from "./select.utils";

const BaseSelectNoSSR = dynamic(() => import("react-select"), {
  loading: () => <Input responsive />,
  ssr: false,
});

interface SelectProps
  extends BaseSelectProps,
    VariantProps<typeof selectVariants> {
  bordered?: boolean;
  borderOffset?: boolean;
}

const Select = ({
  size = "md",
  color,
  borderOffset = true,
  bordered = true,
  className = "",
  menuPortalTarget,
  responsive = false,
  placeholder = "select...",
  components,
  ...restProps
}: SelectProps) => {
  const getMenuPortal = () => {
    return typeof document !== "undefined"
      ? document.querySelector("body")
      : null;
  };

  return (
    <BaseSelectNoSSR
      unstyled
      placeholder={placeholder}
      classNames={{
        control: () =>
          cnM(
            selectVariants({
              size,
              color,
              responsive,
            }),
            bordered && [
              "border-[1px] border-base-content/20",
              {
                "border-primary": color === "primary",
                "border-secondary": color === "secondary",
                "border-accent": color === "accent",
                "border-success": color === "success",
                "border-warning": color === "warning",
                "border-error": color === "error",
                "border-info": color === "info",
              },
            ],
            "!pr-xs-s",
          ),
        container: (state) =>
          cnM(
            "rounded-btn bg-base-100",
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
        menu: () =>
          cn("mt-2 rounded-xl border border-base-content/40 bg-base-100 p-2"),
        menuList: () => cn("space-y-2"),
        option: (state) =>
          cnM(
            "!cursor-pointer rounded-btn p-2 text-base-content",
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
      components={{
        DropdownIndicator: (props) => (
          <Components.DropdownIndicator {...props}>
            <Icons.ChevronsUpDown
              className={cnM(
                "h-4 w-4",
                color === "primary" && "stroke-primary",
                color === "secondary" && "stroke-secondary",
                color === "accent" && "stroke-accent",
                color === "ghost" && "stroke-base-content",
                color === "error" && "stroke-error",
                color === "warning" && "stroke-warning",
                color === "success" && "stroke-success",
                color === "info" && "stroke-info",
                responsive && "h-4 w-4 md:h-6 md:w-6",
              )}
            />
          </Components.DropdownIndicator>
        ),
        ...components,
      }}
      {...restProps}
      menuPortalTarget={getMenuPortal()}
    />
  );
};

export { Select, type SelectProps };
