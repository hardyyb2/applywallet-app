"use client";

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
  createBlockquotePlugin,
  ELEMENT_BLOCKQUOTE,
} from "@udecode/plate-block-quote";
import {
  createPlugins,
  Plate,
  PlateLeaf,
  withProps,
  type PlateProps,
  type RenderAfterEditable,
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
import {
  createHorizontalRulePlugin,
  ELEMENT_HR,
} from "@udecode/plate-horizontal-rule";
import { createLinkPlugin, ELEMENT_LINK } from "@udecode/plate-link";
import { ELEMENT_PARAGRAPH } from "@udecode/plate-paragraph";
import { cva, type VariantProps } from "cva";

import { BlockquoteElement } from "../BlockQuote";
import { FixedToolbar } from "../FixedToolbar";
import { FixedToolbarButtons } from "../FixedToolbarButtons";
import { Heading } from "../Heading";
import { HrElement } from "../HrElement";
import { LinkElement } from "../LinkElement";
import { LinkFloatingToolbar } from "../LinkFloatingToolbar";
import { ParagraphElement } from "../ParagraphElement";
import { withPlaceholders } from "../Placeholder";
import { PlateEditor } from "../PlateEditor";

const plugins = createPlugins(
  [
    createBoldPlugin(),
    createItalicPlugin(),
    createUnderlinePlugin(),
    createStrikethroughPlugin(),
    createBlockquotePlugin(),
    createHeadingPlugin(),
    createHorizontalRulePlugin(),
    createLinkPlugin({
      renderAfterEditable: LinkFloatingToolbar as RenderAfterEditable,
    }),
  ],
  {
    components: withPlaceholders({
      [MARK_BOLD]: withProps(PlateLeaf, { as: "strong" }),
      [MARK_ITALIC]: withProps(PlateLeaf, { as: "em" }),
      [MARK_STRIKETHROUGH]: withProps(PlateLeaf, { as: "s" }),
      [MARK_UNDERLINE]: withProps(PlateLeaf, { as: "u" }),
      [ELEMENT_BLOCKQUOTE]: BlockquoteElement,
      [ELEMENT_LINK]: LinkElement,
      [ELEMENT_PARAGRAPH]: ParagraphElement,
      [ELEMENT_HR]: HrElement,

      [ELEMENT_H1]: withProps(Heading, { variant: "h1" }),
      [ELEMENT_H2]: withProps(Heading, { variant: "h2" }),
      [ELEMENT_H3]: withProps(Heading, { variant: "h3" }),
      [ELEMENT_H4]: withProps(Heading, { variant: "h4" }),
      [ELEMENT_H5]: withProps(Heading, { variant: "h5" }),
      [ELEMENT_H6]: withProps(Heading, { variant: "h6" }),
    }),
  },
);

const rtBaseEditorVariants = cva(
  "rounded-lg outline-offset-2 focus-within:outline outline-base-content/20 border",
  {
    variants: {
      color: {
        primary: "border-primary",
        secondary: "border-secondary",
        accent: "border-accent",
        success: "border-success",
        warning: "border-warning",
        error: "border-error",
        info: "border-info",
        ghost: "border-base-content/20",
      },
    },
    defaultVariants: {
      color: "ghost",
    },
  },
);

interface RTBaseEditorProps
  extends Omit<PlateProps, "children">,
    VariantProps<typeof rtBaseEditorVariants> {}

function RTBaseEditor({ color, ...props }: RTBaseEditorProps) {
  return (
    <Plate {...props} plugins={plugins}>
      <div className={rtBaseEditorVariants({ color })}>
        <FixedToolbar className="border-none lg:p-3xs">
          <FixedToolbarButtons />
        </FixedToolbar>
        <PlateEditor
          placeholder="Type your message here."
          className="rounded-t-none border-none"
        />
      </div>
    </Plate>
  );
}

export { RTBaseEditor, type RTBaseEditorProps };
