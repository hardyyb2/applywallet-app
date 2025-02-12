import * as React from "react";

import type { VariantProps } from "cva";

import { cnM } from "@/utils/styles";

import { tableVariants } from "./table.utils";

interface TableProps
  extends React.ComponentProps<"table">,
    VariantProps<typeof tableVariants> {}

const Table = React.forwardRef<HTMLTableElement, TableProps>(
  (
    { size, pinRows, pinCols, variant, className, responsive, ...props },
    ref,
  ) => (
    <table
      ref={ref}
      className={tableVariants({
        size,
        pinRows,
        pinCols,
        variant,
        responsive,
        className,
      })}
      {...props}
    />
  ),
);
Table.displayName = "Table";

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.ComponentProps<"thead">
>(({ className, ...props }, ref) => (
  <thead ref={ref} className={className} {...props} />
));
TableHeader.displayName = "TableHeader";

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.ComponentProps<"tbody">
>(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={cnM("[&_tr:last-child]:border-0", className)}
    {...props}
  />
));
TableBody.displayName = "TableBody";

const TableFooter = ({
  ref,
  className,
  ...props
}: React.ComponentProps<"tfoot">) => (
  <tfoot ref={ref} className={className} {...props} />
);
TableFooter.displayName = "TableFooter";

interface TableRowProps extends React.ComponentProps<"tr"> {
  hoverable?: boolean;
}

const TableRow = React.forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ className, hoverable = false, ...props }, ref) => (
    <tr
      ref={ref}
      className={cnM(
        "transition-colors data-[state=selected]:bg-base-300",
        hoverable && "d-hover",
        className,
      )}
      {...props}
    />
  ),
);
TableRow.displayName = "TableRow";

const TableHead = ({
  ref,
  className,
  ...props
}: React.ComponentProps<"th">) => (
  <th
    ref={ref}
    className={cnM(
      "[&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      className,
    )}
    {...props}
  />
);
TableHead.displayName = "TableHead";

const TableCell = ({
  ref,
  className,
  ...props
}: React.ComponentProps<"td">) => (
  <td
    ref={ref}
    className={cnM(
      "[&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      className,
    )}
    {...props}
  />
);
TableCell.displayName = "TableCell";

const TableCaption = ({
  ref,
  className,
  ...props
}: React.ComponentProps<"caption">) => (
  <caption
    ref={ref}
    className={cnM("text-base-content/80", className)}
    {...props}
  />
);
TableCaption.displayName = "TableCaption";

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
};
