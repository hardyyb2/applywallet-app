import React from "react";

import { PlateElement, type PlateElementProps } from "@udecode/plate-common";
import { useFocused, useSelected } from "slate-react";

import { cnM } from "@/utils/styles";

const HrElement = ({
  ref,
  className,
  nodeProps,
  ...props
}: PlateElementProps & {
  ref?: React.RefObject<React.ElementRef<typeof PlateElement>>;
}) => {
  const { children } = props;

  const selected = useSelected();
  const focused = useFocused();

  return (
    <PlateElement ref={ref} {...props}>
      <div className="py-6" contentEditable={false}>
        <hr
          {...nodeProps}
          className={cnM(
            "h-0.5 cursor-pointer rounded-sm border-none bg-base-content bg-clip-content",
            selected && focused && "ring-2 ring-base-content/40 ring-offset-2",
            className,
          )}
        />
      </div>
      {children}
    </PlateElement>
  );
};
HrElement.displayName = "HrElement";

export { HrElement };
