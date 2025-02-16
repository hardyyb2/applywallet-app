import { type ComponentProps, type JSX } from "react";

import { cva, type VariantProps } from "cva";

import { cnM } from "@/utils/styles";

export interface ListProps extends ComponentProps<"ul"> {}

export interface ListItemProps extends ComponentProps<"li"> {}

export const listItemVariants = cva("d-list-row");

type ListItemVariant = VariantProps<typeof listItemVariants>;

export const ListItem = ({
  className,
  ...rest
}: ListItemProps & ListItemVariant): JSX.Element => {
  return <li {...rest} className={cnM(listItemVariants(), className)} />;
};

export const List = ({ className, ...rest }: ListProps): JSX.Element => {
  return <ul {...rest} className={cnM("d-list", className)} />;
};
