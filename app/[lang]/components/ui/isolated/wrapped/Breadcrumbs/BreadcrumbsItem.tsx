import React from "react";

export type BreadcrumbsItemProps = React.LiHTMLAttributes<HTMLLIElement> & {
  href?: string;
};

const BreadcrumbsItem = React.forwardRef<HTMLLIElement, BreadcrumbsItemProps>(
  ({ children, href, ...props }, ref): JSX.Element => {
    return (
      <li role="link" {...props} ref={ref}>
        {children}
      </li>
    );
  },
);

BreadcrumbsItem.displayName = "BreadcrumbsItem";

export { BreadcrumbsItem };
