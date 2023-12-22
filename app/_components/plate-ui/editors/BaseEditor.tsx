"use client";

import { useState } from "react";

import {
  createBoldPlugin,
  createItalicPlugin,
  createStrikethroughPlugin,
  createUnderlinePlugin,
  MARK_BOLD,
  MARK_ITALIC,
  MARK_STRIKETHROUGH,
  MARK_UNDERLINE,
} from "@udecode/plate-basic-marks";
import {
  createPlugins,
  Plate,
  PlateLeaf,
  withProps,
} from "@udecode/plate-common";
import { ELEMENT_H1 } from "@udecode/plate-heading";

import { FixedToolbar } from "../FixedToolbar";
import { FixedToolbarButtons } from "../FixedToolbarButtons";
import { PlateEditor } from "../PlateEditor";

const plugins = createPlugins(
  [
    createBoldPlugin(),
    createItalicPlugin(),
    createUnderlinePlugin(),
    createStrikethroughPlugin(),
  ],
  {
    components: {
      [MARK_BOLD]: withProps(PlateLeaf, { as: "strong" }),
      [MARK_ITALIC]: withProps(PlateLeaf, { as: "em" }),
      [MARK_STRIKETHROUGH]: withProps(PlateLeaf, { as: "s" }),
      [MARK_UNDERLINE]: withProps(PlateLeaf, { as: "u" }),

      [ELEMENT_H1]: withProps((props) => <h1 {...props} />, {
        className: "display-l",
      }),
    },
  },
);

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
          <FixedToolbarButtons />
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
