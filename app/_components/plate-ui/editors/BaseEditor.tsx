"use client";

import { useState } from "react";

import { createBoldPlugin, MARK_BOLD } from "@udecode/plate-basic-marks";
import {
  createPlugins,
  Plate,
  PlateLeaf,
  useMarkToolbarButton,
  useMarkToolbarButtonState,
  withProps,
} from "@udecode/plate-common";

import { Button } from "@/components/isolated/Button";
import { Icons } from "@/components/isolated/Icons";

import { Editor } from "../Editor";
import { FixedToolbar } from "../FIxedToolbar";
import { MarkToolbarButton } from "../MarkToolbarButton";

const plugins = createPlugins([createBoldPlugin()], {
  components: {
    [MARK_BOLD]: withProps(PlateLeaf, { as: "strong" }),
  },
});

export function PlateEditor() {
  const [initialValue, setInitialValue] = useState([
    {
      id: "1",
      type: "p",
      children: [{ text: "Hello, World!" }],
    },
  ]);

  return (
    <Plate
      plugins={plugins}
      initialValue={initialValue}
      onChange={(value) => setInitialValue(value)}
    >
      <div className="rounded-lg outline-offset-2 outline-base-content/20 focus-within:outline">
        <FixedToolbar className="p-3xs">
          <MarkToolbarButton tooltip="Bold (⌘+B)" nodeType={MARK_BOLD}>
            <Icons.BookOpen />
          </MarkToolbarButton>
        </FixedToolbar>
        <Editor
          placeholder="Type your message here."
          className="rounded-t-none"
        />
      </div>
    </Plate>
  );
}
