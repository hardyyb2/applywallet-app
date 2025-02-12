import {
  type ComponentProps,
  type HTMLAttributes,
  type ReactElement,
} from "react";

/** <BreadcrumbsItem> */
export type BreadcrumbsItemProps = ComponentProps<"li"> & {
  href?: string;
};

const BreadcrumbsItem = ({
  ref,
  children,
  href,
  ...props
}: BreadcrumbsItemProps) => {
  return (
    <li role="link" {...props} ref={ref}>
      {children}
    </li>
  );
};

BreadcrumbsItem.displayName = "BreadcrumbsItem";
/** </BreadcrumbsItem> */

export type BreadcrumbsProps = ComponentProps<"div"> & {
  children?:
    | ReactElement<BreadcrumbsItemProps>
    | ReactElement<BreadcrumbsItemProps>[];
  innerRef?: React.Ref<HTMLUListElement>;
  innerProps?: HTMLAttributes<HTMLUListElement>;
};

const Breadcrumbs = ({
  ref,
  children,
  className,
  innerProps,
  innerRef,
  ...props
}: BreadcrumbsProps) => {
  return (
    <div
      role="navigation"
      aria-label="Breadcrumbs"
      {...props}
      className="d-breadcrumbs caption-s !font-semibold lg:caption-l"
      ref={ref}
    >
      <ul {...innerProps} ref={innerRef}>
        {children}
      </ul>
    </div>
  );
};

Breadcrumbs.displayName = "Breadcrumbs";

const BreadcrumbsCompound = Object.assign(Breadcrumbs, {
  Item: BreadcrumbsItem,
});

export { BreadcrumbsCompound as Breadcrumbs };
