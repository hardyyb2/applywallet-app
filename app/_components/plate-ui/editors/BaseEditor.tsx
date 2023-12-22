"use client";

import { useState } from "react";

import { createBoldPlugin, MARK_BOLD } from "@udecode/plate-basic-marks";
import {
  createPlugins,
  Plate,
  PlateLeaf,
  withProps,
} from "@udecode/plate-common";

import { Icons } from "@/components/isolated/Icons";

import { FixedToolbar } from "../FIxedToolbar";
import { MarkToolbarButton } from "../MarkToolbarButton";
import { PlateEditor } from "../PlateEditor";

const plugins = createPlugins([createBoldPlugin()], {
  components: {
    [MARK_BOLD]: withProps(PlateLeaf, { as: "strong" }),
  },
});

function BaseEditor() {
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
            <Icons.Bold />
          </MarkToolbarButton>
        </FixedToolbar>
        <PlateEditor
          placeholder="Type your message here."
          className="rounded-t-none"
        />
      </div>
    </Plate>
  );
}

export { BaseEditor };
