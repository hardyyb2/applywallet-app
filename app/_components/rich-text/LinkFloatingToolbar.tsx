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

import { buttonVariants } from "../../../common/components/ds/Button";
import { Icons } from "../../../common/components/ds/Icons";
import { inputVariants } from "../../../common/components/ds/Input/input.utils";
import { popoverVariants } from "../../../common/components/ds/Popover";
import { Separator } from "../../../common/components/ds/Separator";

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
    <div className="flex flex-col">
      <div className="flex items-center">
        <div className="flex items-center px-2xs">
          <Icons.Link2 className="h-4 w-4" />
        </div>

        <FloatingLinkUrlInput
          className={inputVariants({
            color: "ghost",
            bordered: false,
            responsive: true,
          })}
          placeholder="paste link"
        />
      </div>

      <Separator className="my-2xs bg-base-content/20" />

      <div className="flex items-center">
        <div className="flex items-center px-2xs">
          <Icons.Text className="h-4 w-4" />
        </div>
        <input
          className={inputVariants({
            color: "ghost",
            bordered: false,
            responsive: true,
          })}
          placeholder="text to display"
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
        edit link
      </button>

      <Separator className="my-2xs" orientation="vertical" />

      <LinkOpenButton
        className={buttonVariants({
          color: "ghost",
          size: "sm",
        })}
      >
        <Icons.ExternalLink width={18} />
      </LinkOpenButton>

      <Separator orientation="vertical" />

      <button
        type="button"
        className={buttonVariants({
          color: "ghost",
          size: "sm",
        })}
        {...unlinkButtonProps}
      >
        <Icons.Unlink width={18} />
      </button>
    </div>
  );

  return (
    <>
      <div
        ref={insertRef}
        className={popoverVariants({ className: "!z-[100] w-auto p-2xs" })}
        {...insertProps}
      >
        {input}
      </div>

      <div
        ref={editRef}
        className={popoverVariants({ className: "!z-[100] w-auto p-2xs" })}
        {...editProps}
      >
        {editContent}
      </div>
    </>
  );
}
