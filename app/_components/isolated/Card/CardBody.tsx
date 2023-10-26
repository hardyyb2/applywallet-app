import { forwardRef, type HTMLAttributes } from "react";

import { cn } from "@/utils/styles.utils";

export type CardBodyProps = HTMLAttributes<HTMLDivElement>;

const CardBody = forwardRef<HTMLDivElement, CardBodyProps>(
  ({ className, ...props }, ref) => (
    <div {...props} className={cn("card-body", className)} ref={ref} />
  ),
);

CardBody.displayName = "CardBody";

export { CardBody };
