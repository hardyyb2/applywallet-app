import React, { ElementType, forwardRef, HTMLAttributes } from "react";

import { cn } from "@/utils/styles.utils";

// TODO - Fix div type here, can be any element
export type CardTitleProps = HTMLAttributes<HTMLDivElement> & {
  tag?: ElementType;
};

const CardTitle = forwardRef<HTMLElement, CardTitleProps>(
  ({ className, tag = "div", ...props }, ref) => {
    const Tag = tag;

    return <Tag {...props} className={cn("card-title", className)} ref={ref} />;
  },
);

CardTitle.displayName = "CardTitle";

export { CardTitle };
