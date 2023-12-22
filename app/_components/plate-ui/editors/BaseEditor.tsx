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
import {
  createHeadingPlugin,
  ELEMENT_H1,
  ELEMENT_H2,
  ELEMENT_H3,
  ELEMENT_H4,
  ELEMENT_H5,
  ELEMENT_H6,
} from "@udecode/plate-heading";

import { FixedToolbar } from "../FixedToolbar";
import { FixedToolbarButtons } from "../FixedToolbarButtons";
import { Heading } from "../Heading";
import { PlateEditor } from "../PlateEditor";

const plugins = createPlugins(
  [
    createBoldPlugin(),
    createItalicPlugin(),
    createUnderlinePlugin(),
    createStrikethroughPlugin(),
    createHeadingPlugin(),
  ],
  {
    components: {
      [MARK_BOLD]: withProps(PlateLeaf, { as: "strong" }),
      [MARK_ITALIC]: withProps(PlateLeaf, { as: "em" }),
      [MARK_STRIKETHROUGH]: withProps(PlateLeaf, { as: "s" }),
      [MARK_UNDERLINE]: withProps(PlateLeaf, { as: "u" }),

      [ELEMENT_H1]: withProps(Heading, { variant: "h1" }),
      [ELEMENT_H2]: withProps(Heading, { variant: "h2" }),
      [ELEMENT_H3]: withProps(Heading, { variant: "h3" }),
      [ELEMENT_H4]: withProps(Heading, { variant: "h4" }),
      [ELEMENT_H5]: withProps(Heading, { variant: "h5" }),
      [ELEMENT_H6]: withProps(Heading, { variant: "h6" }),
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
