import React from "react";

import type { DropdownMenuProps } from "@radix-ui/react-dropdown-menu";
import { MARK_SUBSCRIPT, MARK_SUPERSCRIPT } from "@udecode/plate-basic-marks";
import { focusEditor, toggleMark, useEditorRef } from "@udecode/plate-common";
import { MARK_HIGHLIGHT } from "@udecode/plate-highlight";
import { useBoolean } from "react-use";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../isolated/DropdownMenu";
import { Icons } from "../isolated/Icons";
import { ToolbarButton } from "../isolated/Toolbar";

export function MoreDropdownMenu(props: DropdownMenuProps) {
  const editor = useEditorRef();
  const [open, setOpen] = useBoolean(false);

  return (
    <DropdownMenu modal={false} open={open} onOpenChange={setOpen} {...props}>
      <DropdownMenuTrigger asChild>
        <ToolbarButton pressed={open} tooltip="insert">
          <Icons.MoreVertical />
        </ToolbarButton>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="start"
        className="flex max-h-[500px] min-w-[120px] flex-col gap-1 overflow-y-auto"
      >
        <DropdownMenuItem
          onSelect={() => {
            toggleMark(editor, {
              key: MARK_HIGHLIGHT,
              clear: MARK_HIGHLIGHT,
            });
            focusEditor(editor);
          }}
        >
          <Icons.Highlighter className="mr-2 h-5 w-5" />
          highlight
        </DropdownMenuItem>

        <DropdownMenuItem
          onSelect={() => {
            toggleMark(editor, {
              key: MARK_SUPERSCRIPT,
              clear: MARK_SUPERSCRIPT,
            });
            focusEditor(editor);
          }}
        >
          <Icons.Superscript className="mr-2 h-5 w-5" />
          superscript
        </DropdownMenuItem>
        <DropdownMenuItem
          onSelect={() => {
            toggleMark(editor, {
              key: MARK_SUBSCRIPT,
              clear: MARK_SUBSCRIPT,
            });
            focusEditor(editor);
          }}
        >
          <Icons.Subscript className="mr-2 h-5 w-5" />
          subscript
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
