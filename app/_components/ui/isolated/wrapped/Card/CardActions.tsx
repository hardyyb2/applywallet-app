import { forwardRef, HTMLAttributes } from "react";

import { cn } from "@/_utils/styles.utils";

export type CardActionsProps = HTMLAttributes<HTMLDivElement>;

const CardActions = forwardRef<HTMLDivElement, CardActionsProps>(
  ({ className, ...props }, ref) => (
    <div {...props} className={cn("card-actions", className)} ref={ref} />
  ),
);

CardActions.displayName = "CardActions";

export { CardActions };
