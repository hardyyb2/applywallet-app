"use client";

import React from "react";

import {
  useMarkToolbarButton,
  useMarkToolbarButtonState,
} from "@udecode/plate-common";

import { cnM } from "@/utils/styles";

import {
  ToolbarButton,
  type ToolbarButtonProps,
} from "../../../common/components/ds/Toolbar";

export interface MarkToolbarButtonProps
  extends Pick<ToolbarButtonProps, "tooltip" | "children"> {
  nodeType: string;
  clear?: string | string[];
  className?: string;
}

/**
 * Toolbar button to toggle the mark of the leaves in selection.
 */
export function MarkToolbarButton({
  clear,
  nodeType,
  className,
  ...props
}: MarkToolbarButtonProps) {
  const state = useMarkToolbarButtonState({ clear, nodeType });
  const { props: buttonProps } = useMarkToolbarButton(state);

  return (
    <ToolbarButton className={cnM(className)} {...buttonProps} {...props} />
  );
}
