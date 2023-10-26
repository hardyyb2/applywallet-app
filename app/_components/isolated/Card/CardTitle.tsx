import { cn } from "@/utils/styles.utils";

import { Typography, type TypographyProps } from "../Typography";

export type CardTitleProps = TypographyProps;

const CardTitle = ({ className, ...props }: CardTitleProps) => {
  return <Typography {...props} className={cn("card-title", className)} />;
};

CardTitle.displayName = "CardTitle";

export { CardTitle };
