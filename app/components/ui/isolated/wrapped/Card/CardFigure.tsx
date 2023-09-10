import { forwardRef, HTMLAttributes, PropsWithChildren } from "react";

export type CardFigureProps = PropsWithChildren & HTMLAttributes<HTMLElement>;

const CardFigure = forwardRef<HTMLElement, CardFigureProps>(
  ({ children, ...props }, ref) => {
    return (
      <figure ref={ref} {...props}>
        {children}
      </figure>
    );
  },
);

CardFigure.displayName = "CardFigure";

export { CardFigure };
