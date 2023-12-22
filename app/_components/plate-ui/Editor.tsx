import React from "react";

import { PlateContent } from "@udecode/plate-common";
import type { PlateContentProps } from "@udecode/plate-common";
import { cva, type VariantProps } from "cva";

import { cnM } from "@/utils/styles";

const editorVariants = cva(
  cnM(
    "relative overflow-x-auto whitespace-pre-wrap break-words",
    "min-h-[80px] w-full rounded-md px-3 py-2 text-sm focus-visible:outline-none",
    "[&_[data-slate-placeholder]]:!opacity-100",
    "[&_[data-slate-placeholder]]:top-[auto_!important]",
    "[&_strong]:font-bold",
    // Color styles below
    "ring-offset-background placeholder:text-muted-foreground [&_[data-slate-placeholder]]:text-muted-foreground bg-background  ",
  ),
  {
    variants: {
      variant: {
        outline: "border",
        ghost: "",
      },
      focused: {
        true: "ring-2 ring-offset-2",
      },
      disabled: {
        true: "cursor-not-allowed opacity-50",
      },
      focusRing: {
        true: "focus-visible:ring-2 focus-visible:ring-offset-2",
        false: "",
      },
      size: {
        sm: "text-sm",
        md: "text-base",
      },
    },
    defaultVariants: {
      variant: "outline",
      focusRing: true,
      size: "sm",
    },
  },
);

export type EditorProps = PlateContentProps &
  VariantProps<typeof editorVariants>;

const Editor = React.forwardRef<HTMLDivElement, EditorProps>(
  (
    {
      className,
      disabled,
      focused,
      focusRing,
      readOnly,
      size,
      variant,
      ...props
    },
    ref,
  ) => {
    return (
      <div ref={ref} className="relative w-full">
        <PlateContent
          className={cnM(
            editorVariants({
              disabled,
              focused,
              focusRing,
              size,
              variant,
            }),
            className,
          )}
          disableDefaultStyles
          readOnly={disabled ?? readOnly}
          aria-disabled={disabled}
          {...props}
        />
      </div>
    );
  },
);
Editor.displayName = "Editor";

export { Editor };
