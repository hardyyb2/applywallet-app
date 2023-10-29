import { forwardRef, type HTMLAttributes } from "react";

import { cn } from "@/utils/styles";

export type CardActionsProps = HTMLAttributes<HTMLDivElement>;

const CardActions = forwardRef<HTMLDivElement, CardActionsProps>(
  ({ className, ...props }, ref) => (
    <div {...props} className={cn("card-actions", className)} ref={ref} />
  ),
);

CardActions.displayName = "CardActions";

export { CardActions };
