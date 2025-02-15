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
            "bg-base-content h-0.5 cursor-pointer rounded-xs border-none bg-clip-content",
            selected && focused && "ring-base-content/40 ring-2 ring-offset-2",
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
