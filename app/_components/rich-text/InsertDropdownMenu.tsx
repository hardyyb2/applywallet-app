"use client";

import React from "react";

import { type DropdownMenuProps } from "@radix-ui/react-dropdown-menu";
import { ELEMENT_BLOCKQUOTE } from "@udecode/plate-block-quote";
import {
  focusEditor,
  insertEmptyElement,
  useEditorState,
} from "@udecode/plate-common";
import {
  ELEMENT_H1,
  ELEMENT_H2,
  ELEMENT_H3,
  ELEMENT_H4,
  ELEMENT_H5,
  ELEMENT_H6,
} from "@udecode/plate-heading";
import { ELEMENT_HR } from "@udecode/plate-horizontal-rule";
import { ELEMENT_LINK, triggerFloatingLink } from "@udecode/plate-link";
import { ELEMENT_PARAGRAPH } from "@udecode/plate-paragraph";
import type { LucideIcon } from "lucide-react";
import { useBoolean } from "react-use";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../../common/components/isolated/DropdownMenu";
import { Icons } from "../../../common/components/isolated/Icons";
import { ToolbarButton } from "../../../common/components/isolated/Toolbar";

const items: {
  label: string;
  items: {
    value: string;
    label: string;
    description: string;
    icon: LucideIcon;
  }[];
}[] = [
  {
    label: "basic blocks",
    items: [
      {
        value: ELEMENT_PARAGRAPH,
        label: "paragraph",
        description: "paragraph",
        icon: Icons.Pilcrow,
      },
      {
        value: ELEMENT_H1,
        label: "heading 1",
        description: "heading 1",
        icon: Icons.Heading1,
      },
      {
        value: ELEMENT_H2,
        label: "heading 2",
        description: "heading 2",
        icon: Icons.Heading2,
      },
      {
        value: ELEMENT_H3,
        label: "heading 3",
        description: "heading 3",
        icon: Icons.Heading3,
      },
      {
        value: ELEMENT_H4,
        label: "heading 4",
        description: "heading 4",
        icon: Icons.Heading4,
      },
      {
        value: ELEMENT_H5,
        label: "heading 5",
        description: "heading 5",
        icon: Icons.Heading5,
      },
      {
        value: ELEMENT_H6,
        label: "heading 6",
        description: "heading 6",
        icon: Icons.Heading6,
      },
      {
        value: "ul",
        label: "bulleted list",
        description: "bulleted list",
        icon: Icons.List,
      },
      {
        value: "ol",
        label: "numbered list",
        description: "numbered list",
        icon: Icons.ListOrdered,
      },
      {
        value: ELEMENT_BLOCKQUOTE,
        label: "quote",
        description: "quote",
        icon: Icons.Quote,
      },
      {
        value: ELEMENT_HR,
        label: "horizontal rule",
        description: "horizontal rule",
        icon: Icons.Minus,
      },
    ],
  },
  {
    label: "inline",
    items: [
      {
        value: ELEMENT_LINK,
        label: "link",
        description: "link",
        icon: Icons.Link2,
      },
    ],
  },
];

export function InsertDropdownMenu(props: DropdownMenuProps) {
  const editor = useEditorState();
  const [open, setOpen] = useBoolean(false);

  return (
    <DropdownMenu modal={false} open={open} onOpenChange={setOpen} {...props}>
      <DropdownMenuTrigger asChild>
        <ToolbarButton pressed={open} tooltip="Insert" isDropdown>
          <Icons.Plus />
        </ToolbarButton>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="start"
        className="flex max-h-[500px] min-w-0 flex-col gap-0.5 overflow-y-auto"
      >
        {items.map(({ items: nestedItems, label }, index) => (
          <React.Fragment key={label}>
            {index !== 0 && <DropdownMenuSeparator />}

            <DropdownMenuLabel>{label}</DropdownMenuLabel>
            {nestedItems.map(
              ({ value: type, label: itemLabel, icon: Icon }) => (
                <DropdownMenuItem
                  key={type}
                  className="min-w-[180px]"
                  onSelect={async () => {
                    switch (type) {
                      case ELEMENT_LINK: {
                        triggerFloatingLink(editor, { focused: true });

                        break;
                      }

                      default: {
                        insertEmptyElement(editor, type, {
                          select: true,
                          nextBlock: true,
                        });
                      }
                    }

                    focusEditor(editor);
                  }}
                >
                  <Icon className="mr-2 h-5 w-5" />
                  {itemLabel}
                </DropdownMenuItem>
              ),
            )}
          </React.Fragment>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
