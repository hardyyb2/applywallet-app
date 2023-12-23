"use client";

import React from "react";

import {
  flip,
  offset,
  type UseVirtualFloatingOptions,
} from "@udecode/plate-floating";
import {
  FloatingLinkUrlInput,
  LinkOpenButton,
  useFloatingLinkEdit,
  useFloatingLinkEditState,
  useFloatingLinkInsert,
  useFloatingLinkInsertState,
  type LinkFloatingToolbarState,
} from "@udecode/plate-link";

import { cnM } from "@/utils/styles";

import { buttonVariants } from "../isolated/Button";
import { Divider } from "../isolated/Divider";
import { Icons } from "../isolated/Icons";
import { popoverVariants } from "../isolated/Popover";

const floatingOptions: UseVirtualFloatingOptions = {
  placement: "bottom-start",
  middleware: [
    offset(12),
    flip({
      padding: 12,
      fallbackPlacements: ["bottom-end", "top-start", "top-end"],
    }),
  ],
};

export interface LinkFloatingToolbarProps {
  state?: LinkFloatingToolbarState;
}

export function LinkFloatingToolbar({ state }: LinkFloatingToolbarProps) {
  const insertState = useFloatingLinkInsertState({
    ...state,
    floatingOptions: {
      ...floatingOptions,
      ...state?.floatingOptions,
    },
  });
  const {
    props: insertProps,
    ref: insertRef,
    hidden,
    textInputProps,
  } = useFloatingLinkInsert(insertState);

  const editState = useFloatingLinkEditState({
    ...state,
    floatingOptions: {
      ...floatingOptions,
      ...state?.floatingOptions,
    },
  });
  const {
    props: editProps,
    ref: editRef,
    editButtonProps,
    unlinkButtonProps,
  } = useFloatingLinkEdit(editState);

  if (hidden) {
    return null;
  }

  const input = (
    <div className="flex w-[330px] flex-col">
      <div className="flex items-center">
        <div className="text-muted-foreground flex items-center pl-3">
          <Icons.Link2 className="h-4 w-4" />
        </div>

        <FloatingLinkUrlInput
          // className={inputVariants({ variant: "ghost", h: "sm" })}
          placeholder="Paste link"
        />
      </div>

      <Divider />

      <div className="flex items-center">
        <div className="text-muted-foreground flex items-center pl-3">
          <Icons.Text className="h-4 w-4" />
        </div>
        <input
          // className={inputVariants({ variant: "ghost", h: "sm" })}
          placeholder="Text to display"
          {...textInputProps}
        />
      </div>
    </div>
  );

  const editContent = editState.isEditing ? (
    input
  ) : (
    <div className="box-content flex h-9 items-center gap-1">
      <button
        type="button"
        className={buttonVariants({ color: "ghost", size: "sm" })}
        {...editButtonProps}
      >
        Edit link
      </button>

      <Divider vertical />

      <LinkOpenButton
        className={buttonVariants({
          color: "ghost",
          size: "sm",
        })}
      >
        <Icons.ExternalLink width={18} />
      </LinkOpenButton>

      <Divider vertical />

      <button
        type="button"
        className={buttonVariants({
          color: "ghost",
          size: "sm",
        })}
        {...unlinkButtonProps}
      >
        <Icons.Unlink2 width={18} />
      </button>
    </div>
  );

  return (
    <>
      <div
        ref={insertRef}
        className={popoverVariants({ className: "!z-[100] w-auto p-1" })}
        {...insertProps}
      >
        {input}
      </div>

      <div
        ref={editRef}
        className={popoverVariants({ className: "!z-[100] w-auto p-1" })}
        {...editProps}
      >
        {editContent}
      </div>
    </>
  );
}
