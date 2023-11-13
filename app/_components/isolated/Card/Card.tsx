import { forwardRef, type HTMLAttributes, type PropsWithChildren } from "react";

import { cn } from "@/utils/styles";

import { Typography, type TypographyProps } from "../Typography";
import type { CardSizeTypes } from "./card.types";

/** <CardActions > */
type CardActionsProps = HTMLAttributes<HTMLDivElement>;

const CardActions = forwardRef<HTMLDivElement, CardActionsProps>(
  ({ className, ...props }, ref) => (
    <div {...props} className={cn("card-actions", className)} ref={ref} />
  ),
);

CardActions.displayName = "CardActions";
/** </CardActions > */

/** <CardBody> */
export type CardBodyProps = HTMLAttributes<HTMLDivElement>;

const CardBody = forwardRef<HTMLDivElement, CardBodyProps>(
  ({ className, ...props }, ref) => (
    <div {...props} className={cn("card-body", className)} ref={ref} />
  ),
);

CardBody.displayName = "CardBody";
/* </CardBody> */

/* <CardFigure> */
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
/* </CardFigure> */

/* <CardTitle> */
export type CardTitleProps = TypographyProps;

const CardTitle = ({ className, ...props }: CardTitleProps) => {
  return <Typography {...props} className={cn("card-title", className)} />;
};

CardTitle.displayName = "CardTitle";
/* </CardTitle> */

export type CardProps = HTMLAttributes<HTMLDivElement> & {
  bordered?: boolean;
  /** The image in <figure> element will be the background */
  imageFull?: boolean;
  /** Applies default paddings */
  normal?: CardSizeTypes | boolean;
  /** Applies smaller padding */
  compact?: CardSizeTypes | boolean;
  /** The image in <figure> will be on to the side */
  side?: CardSizeTypes | boolean;
};

interface ModifierMap {
  [key: string]: {
    [key: string]: string | undefined;
  };
}

const DYNAMIC_MODIFIERS: ModifierMap = {
  compact: {
    true: "card-compact",
    xs: "xs:card-compact",
    sm: "sm:card-compact",
    md: "md:card-compact",
    lg: "lg:card-compact",
  },
  normal: {
    true: "card-normal",
    xs: "xs:card-normal",
    sm: "sm:card-normal",
    md: "md:card-normal",
    lg: "lg:card-normal",
  },
  side: {
    true: "card-side",
    xs: "xs:card-side",
    sm: "sm:card-side",
    md: "md:card-side",
    lg: "lg:card-side",
  },
};

const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    { bordered = false, imageFull, normal, compact, side, className, ...props },
    ref,
  ): JSX.Element => {
    const classes = cn(
      "card",
      className,
      cn({
        "card-bordered": bordered,
        "image-full": imageFull,
        [(compact && DYNAMIC_MODIFIERS.compact[compact.toString()]) || ""]:
          compact,
        [(normal && DYNAMIC_MODIFIERS.normal[normal.toString()]) || ""]: normal,
        [(side && DYNAMIC_MODIFIERS.side[side.toString()]) || ""]: side,
      }),
    );

    return <div aria-label="card" {...props} className={classes} ref={ref} />;
  },
);

Card.displayName = "Card";

const CardCompound = Object.assign(Card, {
  Actions: CardActions,
  Body: CardBody,
  Title: CardTitle,
  Figure: CardFigure,
});

export { CardCompound as Card };
