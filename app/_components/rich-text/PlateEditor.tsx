import React from "react";

import { PlateContent } from "@udecode/plate-common";
import type { PlateContentProps } from "@udecode/plate-common";
import { cva, type VariantProps } from "cva";

import { cnM } from "@/utils/styles";

const plateEditorVariants = cva(
  cnM(
    "relative min-h-[80px] w-full overflow-x-auto rounded-md px-3 py-2 break-words whitespace-pre-wrap",
    "data-slate-placeholder:**:top-[auto_!important] data-slate-placeholder:**:opacity-100! [&_strong]:font-bold",
    "bg-base-100 placeholder:text-base-content/40 data-slate-placeholder:**:text-base-content/40",
    "focus-within:outline-hidden",
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

export type PlateEditorProps = PlateContentProps &
  VariantProps<typeof plateEditorVariants>;

const PlateEditor = ({
  ref,
  className,
  disabled,
  readOnly,
  size,
  variant,
  ...props
}: PlateEditorProps & {
  ref?: React.RefObject<HTMLDivElement>;
}) => {
  return (
    <div ref={ref} className="relative w-full">
      <PlateContent
        className={cnM(
          plateEditorVariants({
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
};
PlateEditor.displayName = "PlateEditor";

export { PlateEditor };
