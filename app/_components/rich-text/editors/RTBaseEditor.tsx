"use client";

import {
  createBoldPlugin,
  createItalicPlugin,
  createStrikethroughPlugin,
  createSubscriptPlugin,
  createSuperscriptPlugin,
  createUnderlinePlugin,
  MARK_BOLD,
  MARK_ITALIC,
  MARK_STRIKETHROUGH,
  MARK_SUBSCRIPT,
  MARK_SUPERSCRIPT,
  MARK_UNDERLINE,
} from "@udecode/plate-basic-marks";
import {
  createBlockquotePlugin,
  ELEMENT_BLOCKQUOTE,
} from "@udecode/plate-block-quote";
import {
  createPlugins,
  Plate,
  PlateElement,
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
  createHighlightPlugin,
  MARK_HIGHLIGHT,
} from "@udecode/plate-highlight";
import {
  createHorizontalRulePlugin,
  ELEMENT_HR,
} from "@udecode/plate-horizontal-rule";
import { createLinkPlugin, ELEMENT_LINK } from "@udecode/plate-link";
import {
  createListPlugin,
  ELEMENT_LI,
  ELEMENT_OL,
  ELEMENT_UL,
} from "@udecode/plate-list";
import { ELEMENT_PARAGRAPH } from "@udecode/plate-paragraph";
import { cva, type VariantProps } from "cva";

import { BlockquoteElement } from "../BlockQuote";
import { FixedToolbar } from "../FixedToolbar";
import { FixedToolbarButtons } from "../FixedToolbarButtons";
import { Heading } from "../Heading";
import { HighlightLeaf } from "../HightlightElement";
import { HrElement } from "../HrElement";
import { LinkElement } from "../LinkElement";
import { LinkFloatingToolbar } from "../LinkFloatingToolbar";
import { ListElement } from "../ListElement";
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
    createListPlugin(),
    createHighlightPlugin(),
    createSubscriptPlugin(),
    createSuperscriptPlugin(),
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
      [MARK_SUPERSCRIPT]: withProps(PlateLeaf, { as: "sup" }),
      [MARK_SUBSCRIPT]: withProps(PlateLeaf, { as: "sub" }),

      [ELEMENT_BLOCKQUOTE]: BlockquoteElement,
      [ELEMENT_HR]: HrElement,
      [ELEMENT_LINK]: LinkElement,

      [ELEMENT_H1]: withProps(Heading, { variant: "h1" }),
      [ELEMENT_H2]: withProps(Heading, { variant: "h2" }),
      [ELEMENT_H3]: withProps(Heading, { variant: "h3" }),
      [ELEMENT_H4]: withProps(Heading, { variant: "h4" }),
      [ELEMENT_H5]: withProps(Heading, { variant: "h5" }),
      [ELEMENT_H6]: withProps(Heading, { variant: "h6" }),
      [ELEMENT_PARAGRAPH]: ParagraphElement,
      [MARK_HIGHLIGHT]: HighlightLeaf,

      [ELEMENT_UL]: withProps(ListElement, { variant: "ul" }),
      [ELEMENT_OL]: withProps(ListElement, { variant: "ol" }),
      [ELEMENT_LI]: withProps(PlateElement, { as: "li" }),
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
