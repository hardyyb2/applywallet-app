import React, { forwardRef, ReactElement } from "react";

import clsx from "clsx";

import { BreadcrumbsItem, BreadcrumbsItemProps } from "./BreadcrumbsItem";

export type BreadcrumbsProps = React.HTMLAttributes<HTMLDivElement> & {
  children?:
    | ReactElement<BreadcrumbsItemProps>
    | ReactElement<BreadcrumbsItemProps>[];
  innerRef?: React.Ref<HTMLUListElement>;
  innerProps?: React.HTMLAttributes<HTMLUListElement>;
};

const Breadcrumbs = forwardRef<HTMLDivElement, BreadcrumbsProps>(
  (
    { children, className, innerProps, innerRef, ...props },
    ref,
  ): JSX.Element => {
    const classes = clsx("breadcrumbs text-sm", className);

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
