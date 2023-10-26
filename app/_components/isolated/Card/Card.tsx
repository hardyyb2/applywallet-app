import { forwardRef, type HTMLAttributes } from "react";

import { cn } from "@/utils/styles.utils";

import type { CardSizeTypes } from "./card.types";
import {
  CardActions,
  type CardActionsProps as ActionProps,
} from "./CardActions";
import { CardBody, type CardBodyProps as BodyProps } from "./CardBody";
import { CardFigure, type CardFigureProps as FigureProps } from "./CardFigure";
import { CardTitle, type CardTitleProps as TitleProps } from "./CardTitle";

export type CardActionsProps = ActionProps;
export type CardBodyProps = BodyProps;
export type CardTitleProps = TitleProps;
export type CardFigureProps = FigureProps;

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
