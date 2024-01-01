"use client";

import { useMemo, useState } from "react";

import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnDef,
  type SortingState,
} from "@tanstack/react-table";
import dayjs from "dayjs";

import { BarLoader } from "~/components/ds/BarLoader";
import { Flex } from "~/components/ds/Flex";
import { Icons } from "~/components/ds/Icons";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ds/Table";

import type { InterviewType } from "@/lib/schema/interviews";
import { useInterviews } from "@/queries/interviews.queries";

const tableColumns: ColumnDef<InterviewType>[] = [
  {
    accessorKey: "company_name",
    header: "company name",
  },
  {
    accessorKey: "position",
    header: "position",
    enableSorting: false,
  },
  {
    accessorKey: "start_date",
    header: "start_date",
    cell: ({ row }) => {
      return dayjs(row.original.start_date).format("DD/MM/YYYY");
    },
    sortingFn: (rowA, rowB) => {
      const startDateA = rowA.original.start_date;
      const startDateB = rowB.original.start_date;

      if (!dayjs(startDateA).isValid() || !dayjs(startDateB).isValid()) {
        return 0;
      }

      return dayjs(startDateA).diff(dayjs(startDateB));
    },
  },
  {
    accessorKey: "end_date",
    header: "end date",
    cell: ({ row }) => {
      const endDate: string = row.getValue("end_date");

      if (!endDate || !dayjs(endDate).isValid()) {
        return "-";
      }

      return dayjs(row.getValue("end_date")).format("DD/MM/YYYY");
    },
  },
  {
    accessorKey: "result",
    header: "result",
    cell: ({ row }) => {
      return row.getValue("result") || "-";
    },
  },
];

type InterviewsTableProps = {};

const InterviewsTable = (props: InterviewsTableProps) => {
  const { data = [], isLoading, isFetching } = useInterviews();
  const columns = useMemo(() => tableColumns, []);

  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    // getFilteredRowModel: getFilteredRowModel(),
    // onColumnFiltersChange: setColumnFilters,
    // getPaginationRowModel: getPaginationRowModel(),
    // onColumnVisibilityChange: setColumnVisibility,
    // onRowSelectionChange: setRowSelection,
    debugTable: true,
    state: {
      sorting,

      // columnFilters,
      // columnVisibility,
      // rowSelection,
    },
  });

  if (isLoading) {
    return <BarLoader />;
  }

  return (
    <div className="overflow-auto rounded-xl">
      <Table responsive>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                if (header.isPlaceholder) {
                  return <TableHead key={header.id} />;
                }

                return (
                  <TableHead key={header.id}>
                    {header.column.getCanSort() ? (
                      <Flex
                        component="button"
                        onClick={header.column.getToggleSortingHandler()}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                        <Icons.ChevronsUpDown className="h-4" />
                      </Flex>
                    ) : (
                      flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )
                    )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow
              key={row.id}
              data-state={row.getIsSelected() && "selected"}
              hoverable
            >
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export { InterviewsTable };
