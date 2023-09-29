import React, { ElementType, forwardRef, HTMLAttributes } from "react";

import { cn } from "@/_utils/styles.utils";

import { Typography, TypographyProps } from "../../common";

export type CardTitleProps = TypographyProps;

const CardTitle = ({ className, ...props }: CardTitleProps) => {
  return <Typography {...props} className={cn("card-title", className)} />;
};

CardTitle.displayName = "CardTitle";

export { CardTitle };
