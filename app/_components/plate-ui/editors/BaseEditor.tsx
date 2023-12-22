"use client";

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

const plugins = createPlugins([createBoldPlugin()], {
  components: {
    [MARK_BOLD]: withProps(PlateLeaf, { as: "strong" }),
  },
});

const initialValue = [
  {
    id: "1",
    type: "p",
    children: [{ text: "Hello, World!" }],
  },
];

export function PlateEditor() {
  const state = useMarkToolbarButtonState({
    nodeType: MARK_BOLD,
  });
  const { props: buttonProps } = useMarkToolbarButton(state);

  return (
    <Plate plugins={plugins} initialValue={initialValue}>
      <FixedToolbar>
        <Button
          onClick={buttonProps.onClick}
          aria-pressed={buttonProps.pressed}
        >
          <Icons.BookOpen />
        </Button>
      </FixedToolbar>

      <Editor />
    </Plate>
  );
}
