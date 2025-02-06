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
  <div {...props} className={cn("dui-card-actions", className)} ref={ref} />
);

CardActions.displayName = "CardActions";
/** </CardActions > */

/** <CardBody> */
export type CardBodyProps = ComponentProps<"div">;

const CardBody = ({ ref, className, ...props }: CardBodyProps) => (
  <div
    {...props}
    className={cnM("dui-card-body rounded-xl bg-base-100", className)}
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
  return <span {...props} className={cn("dui-card-title", className)} />;
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
    true: "dui-card-compact",
    xs: "xs:dui-card-compact",
    sm: "sm:dui-card-compact",
    md: "md:dui-card-compact",
    lg: "lg:dui-card-compact",
  },
  normal: {
    true: "dui-card-normal",
    xs: "xs:dui-card-normal",
    sm: "sm:dui-card-normal",
    md: "md:dui-card-normal",
    lg: "lg:dui-card-normal",
  },
  side: {
    true: "dui-card-side",
    xs: "xs:dui-card-side",
    sm: "sm:dui-card-side",
    md: "md:dui-card-side",
    lg: "lg:dui-card-side",
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
    "dui-card",
    className,
    cn({
      "dui-card-bordered": bordered,
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
