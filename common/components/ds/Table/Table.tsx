import * as React from "react";

import type { VariantProps } from "cva";

import { cnM } from "@/utils/styles";

import { tableVariants } from "./table.utils";

interface TableProps
  extends React.HTMLAttributes<HTMLTableElement>,
    VariantProps<typeof tableVariants> {}

const Table = ({
  ref,
  size,
  pinRows,
  pinCols,
  variant,
  className,
  responsive,
  ...props
}: TableProps & {
  ref: React.RefObject<HTMLTableElement>;
}) => (
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
);
Table.displayName = "Table";

const TableHeader = ({
  ref,
  className,
  ...props
}: React.HTMLAttributes<HTMLTableSectionElement> & {
  ref: React.RefObject<HTMLTableSectionElement>;
}) => <thead ref={ref} className={className} {...props} />;
TableHeader.displayName = "TableHeader";

const TableBody = ({
  ref,
  className,
  ...props
}: React.HTMLAttributes<HTMLTableSectionElement> & {
  ref: React.RefObject<HTMLTableSectionElement>;
}) => (
  <tbody
    ref={ref}
    className={cnM("[&_tr:last-child]:border-0", className)}
    {...props}
  />
);
TableBody.displayName = "TableBody";

const TableFooter = ({
  ref,
  className,
  ...props
}: React.HTMLAttributes<HTMLTableSectionElement> & {
  ref: React.RefObject<HTMLTableSectionElement>;
}) => <tfoot ref={ref} className={className} {...props} />;
TableFooter.displayName = "TableFooter";

interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  hoverable?: boolean;
}

const TableRow = ({
  ref,
  className,
  hoverable = false,
  ...props
}: TableRowProps & {
  ref: React.RefObject<HTMLTableRowElement>;
}) => (
  <tr
    ref={ref}
    className={cnM(
      "transition-colors data-[state=selected]:bg-base-300",
      hoverable && "dui-hover",
      className,
    )}
    {...props}
  />
);
TableRow.displayName = "TableRow";

const TableHead = ({
  ref,
  className,
  ...props
}: React.ThHTMLAttributes<HTMLTableCellElement> & {
  ref: React.RefObject<HTMLTableCellElement>;
}) => (
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
}: React.TdHTMLAttributes<HTMLTableCellElement> & {
  ref: React.RefObject<HTMLTableCellElement>;
}) => (
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
}: React.HTMLAttributes<HTMLTableCaptionElement> & {
  ref: React.RefObject<HTMLTableCaptionElement>;
}) => (
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
