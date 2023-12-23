import React from "react";

import {
  useLinkToolbarButton,
  useLinkToolbarButtonState,
} from "@udecode/plate-link";

import { Icons } from "../isolated/Icons";
import { ToolbarButton } from "../isolated/Toolbar";

export function LinkToolbarButton() {
  const state = useLinkToolbarButtonState();
  const { props } = useLinkToolbarButton(state);

  return (
    <ToolbarButton tooltip="link" {...props}>
      <Icons.Link2 />
    </ToolbarButton>
  );
}
