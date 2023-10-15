import { forwardRef, HTMLAttributes, PropsWithChildren } from "react";

import { cn } from "@/utils/styles.utils";

export type CardFigureProps = PropsWithChildren & HTMLAttributes<HTMLElement>;

const CardFigure = forwardRef<HTMLElement, CardFigureProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <figure ref={ref} className={cn("relative", className)} {...props}>
        {children}
      </figure>
    );
  },
);

CardFigure.displayName = "CardFigure";

export { CardFigure };
