import React from "react";

import type { DropdownMenuProps } from "@radix-ui/react-dropdown-menu";
import {
  focusEditor,
  useEditorReadOnly,
  useEditorRef,
  usePlateStore,
} from "@udecode/plate-common";
import { useBoolean } from "react-use";

import { cnM } from "@/utils/styles";

import { buttonVariants } from "../../../common/components/ds/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "../../../common/components/ds/DropdownMenu";
import { Icons } from "../../../common/components/ds/Icons";
import { ToolbarButton } from "../../../common/components/ds/Toolbar";

export function ModeDropdownMenu(props: DropdownMenuProps) {
  const editor = useEditorRef();
  const setReadOnly = usePlateStore().set.readOnly();
  const readOnly = useEditorReadOnly();
  const [open, setOpen] = useBoolean(false);

  let value: "editing" | "viewing" = "editing";
  if (readOnly) {
    value = "viewing";
  }

  const item: Record<typeof value, React.ReactNode> = {
    editing: (
      <>
        <Icons.Pencil className="h-5 w-5 lg:mr-2" />
        <span className="hidden lg:inline">editing</span>
      </>
    ),
    viewing: (
      <>
        <Icons.Eye className="h-5 w-5 lg:mr-2" />
        <span className="hidden lg:inline">viewing</span>
      </>
    ),
  };

  return (
    <DropdownMenu modal={false} open={open} onOpenChange={setOpen} {...props}>
      <DropdownMenuTrigger asChild>
        <ToolbarButton
          pressed={open}
          tooltip="editing mode"
          isDropdown
          className="min-w-[auto] lg:min-w-[130px]"
        >
          {item[value]}
        </ToolbarButton>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="">
        <DropdownMenuRadioGroup
          className="flex flex-col gap-2"
          value={value}
          onValueChange={(newValue) => {
            if (newValue !== "viewing") {
              setReadOnly(false);
            }

            if (newValue === "viewing") {
              setReadOnly(true);
              return;
            }

            if (newValue === "editing") {
              focusEditor(editor);
              return;
            }
          }}
        >
          <DropdownMenuRadioItem showIcon={false} value="editing">
            {item.editing}
          </DropdownMenuRadioItem>

          <DropdownMenuRadioItem showIcon={false} value="viewing">
            {item.viewing}
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
