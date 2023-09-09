import React, { PropsWithChildren } from "react";

export type CardImageProps = PropsWithChildren;

const CardImage = React.forwardRef<HTMLElement, CardImageProps>(
  ({ children }, ref) => {
    return <figure ref={ref}>{children}</figure>;
  },
);

CardImage.displayName = "CardImage";

export { CardImage };
