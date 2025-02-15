import {
  type ComponentProps,
  type HTMLAttributes,
  type PropsWithChildren,
} from "react";

import { cn, cnM } from "@/utils/styles";

import type { CardSizeTypes } from "./card.types";

/** <CardActions > */
type CardActionsProps = ComponentProps<"div">;

const CardActions = ({ ref, className, ...props }: CardActionsProps) => (
  <div {...props} className={cn("d-card-actions", className)} ref={ref} />
);

CardActions.displayName = "CardActions";
/** </CardActions > */

/** <CardBody> */
export type CardBodyProps = ComponentProps<"div">;

const CardBody = ({ ref, className, ...props }: CardBodyProps) => (
  <div
    {...props}
    className={cnM("d-card-body bg-base-100 rounded-xl", className)}
    ref={ref}
  />
);

CardBody.displayName = "CardBody";
/* </CardBody> */

/* <CardFigure> */
export type CardFigureProps = PropsWithChildren & ComponentProps<"figure">;

const CardFigure = ({
  ref,
  children,
  className,
  ...props
}: CardFigureProps) => {
  return (
    <figure ref={ref} className={cn("relative", className)} {...props}>
      {children}
    </figure>
  );
};

CardFigure.displayName = "CardFigure";
/* </CardFigure> */

/* <CardTitle> */
export interface CardTitleProps extends ComponentProps<"span"> {
  className?: string;
}

const CardTitle = ({ className, ...props }: CardTitleProps) => {
  return <span {...props} className={cn("d-card-title", className)} />;
};

CardTitle.displayName = "CardTitle";
/* </CardTitle> */

export type CardProps = ComponentProps<"div"> & {
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
    true: "d-card-sm",
    xs: "xs:d-card-sm",
    sm: "sm:d-card-sm",
    md: "md:d-card-sm",
    lg: "lg:d-card-sm",
  },
  normal: {
    true: "d-card-normal",
    xs: "xs:d-card-normal",
    sm: "sm:d-card-normal",
    md: "md:d-card-normal",
    lg: "lg:d-card-normal",
  },
  side: {
    true: "d-card-side",
    xs: "xs:d-card-side",
    sm: "sm:d-card-side",
    md: "md:d-card-side",
    lg: "lg:d-card-side",
  },
};

const Card = ({
  ref,
  bordered = false,
  imageFull,
  normal,
  compact,
  side,
  className,
  ...props
}: CardProps) => {
  const classes = cn(
    "d-card",
    className,
    cn({
      "d-card-bordered": bordered,
      "image-full": imageFull,
      [(compact && DYNAMIC_MODIFIERS.compact[compact.toString()]) || ""]:
        compact,
      [(normal && DYNAMIC_MODIFIERS.normal[normal.toString()]) || ""]: normal,
      [(side && DYNAMIC_MODIFIERS.side[side.toString()]) || ""]: side,
    }),
  );

  return <div aria-label="card" {...props} className={classes} ref={ref} />;
};

Card.displayName = "Card";

const CardCompound = Object.assign(Card, {
  Actions: CardActions,
  Body: CardBody,
  Title: CardTitle,
  Figure: CardFigure,
});

export { CardCompound as Card };
