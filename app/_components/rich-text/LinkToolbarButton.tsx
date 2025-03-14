import React from "react";

import {
  useLinkToolbarButton,
  useLinkToolbarButtonState,
} from "@udecode/plate-link";

import { Icons } from "../../../common/components/ds/Icons";
import { ToolbarButton } from "../../../common/components/ds/Toolbar";

export function LinkToolbarButton() {
  const state = useLinkToolbarButtonState();
  const { props } = useLinkToolbarButton(state);

  return (
    <ToolbarButton tooltip="link" {...props}>
      <Icons.Link2 />
    </ToolbarButton>
  );
}
