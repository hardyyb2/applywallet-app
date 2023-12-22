import React from "react";

import { PlateContent } from "@udecode/plate-common";
import type { PlateContentProps } from "@udecode/plate-common";
import { cva, type VariantProps } from "cva";

import { cnM } from "@/utils/styles";

const editorVariants = cva(
  cnM(
    "relative overflow-x-auto whitespace-pre-wrap break-words min-h-[80px] w-full rounded-md px-3 py-2",
    "[&_[data-slate-placeholder]]:!opacity-100 [&_[data-slate-placeholder]]:top-[auto_!important] [&_strong]:font-bold",
    "placeholder:text-base-content/40 [&_[data-slate-placeholder]]:text-base-content/40 bg-base-100",
    "focus-within:outline-none",
  ),
  {
    variants: {
      // TODO - add variants similar to input
      variant: {
        outline: "border border-base-content/20",
        ghost: "",
      },
      disabled: {
        true: "cursor-not-allowed opacity-50",
      },
      size: {
        sm: "body-s",
        md: "body-m",
      },
    },
    defaultVariants: {
      variant: "outline",
      size: "sm",
    },
  },
);

export type EditorProps = PlateContentProps &
  VariantProps<typeof editorVariants>;

const Editor = React.forwardRef<HTMLDivElement, EditorProps>(
  ({ className, disabled, readOnly, size, variant, ...props }, ref) => {
    return (
      <div ref={ref} className="relative w-full">
        <PlateContent
          className={cnM(
            editorVariants({
              disabled,
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
