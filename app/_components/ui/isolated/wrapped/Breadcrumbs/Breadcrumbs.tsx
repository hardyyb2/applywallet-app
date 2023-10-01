import { forwardRef, HTMLAttributes, ReactElement, Ref } from "react";

import { cn } from "@/_utils/styles.utils";

import { BreadcrumbsItem, BreadcrumbsItemProps } from "./BreadcrumbsItem";

export type BreadcrumbsProps = HTMLAttributes<HTMLDivElement> & {
  children?:
    | ReactElement<BreadcrumbsItemProps>
    | ReactElement<BreadcrumbsItemProps>[];
  innerRef?: Ref<HTMLUListElement>;
  innerProps?: HTMLAttributes<HTMLUListElement>;
};

const Breadcrumbs = forwardRef<HTMLDivElement, BreadcrumbsProps>(
  (
    { children, className, innerProps, innerRef, ...props },
    ref,
  ): JSX.Element => {
    const classes = cn("breadcrumbs text-sm", className);

    return (
      <div
        role="navigation"
        aria-label="Breadcrumbs"
        {...props}
        className={classes}
        ref={ref}
      >
        <ul {...innerProps} ref={innerRef}>
          {children}
        </ul>
      </div>
    );
  },
);

Breadcrumbs.displayName = "Breadcrumbs";

const BreadcrumbsCompound = Object.assign(Breadcrumbs, {
  Item: BreadcrumbsItem,
});

export { BreadcrumbsCompound as Breadcrumbs };
