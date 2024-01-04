"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

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
import { Button } from "~/components/ds/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ds/DropdownMenu";
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
import { AppRoutes } from "~/utils/routes";

import type { InterviewType } from "@/lib/schema/interviews";
import { useInterviews } from "@/queries/interviews.queries";

import {
  interviewResultOptionsMap,
  interviewStatusOptionsMap,
} from "./interview.utils";

const tableColumns: ColumnDef<InterviewType>[] = [
  {
    accessorKey: "status",
    header: "status",
    cell: ({ row }) => {
      const status = row.original.status;
      return interviewStatusOptionsMap[status].icon;
    },
  },
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
    accessorKey: "rounds",
    header: "rounds",
    cell: ({ row }) => {
      const rounds = row.original.rounds;
      return rounds.length;
    },
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
      const result = row.original.result;

      if (!result) {
        return "-";
      }

      const option = interviewResultOptionsMap[result];
      return (
        <Flex className="gap-3xs" align="center">
          {option.icon} {option.label}
        </Flex>
      );
    },
    enableSorting: false,
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const interview = row.original;

      return (
        <DropdownMenu>
          <div className="w-full text-right">
            <DropdownMenuTrigger asChild>
              <Button color="ghost" responsive>
                <span className="sr-only">open menu</span>
                <Icons.MoreHorizontal />
              </Button>
            </DropdownMenuTrigger>
          </div>
          <DropdownMenuContent align="end">
            <DropdownMenuItem asChild>
              <Link
                href={AppRoutes.editInterview(interview.id)}
                className="gap-2"
              >
                <Icons.Pencil className="w-4 lg:w-5" />
                edit
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

type InterviewsTableProps = {};

const InterviewsTable = (props: InterviewsTableProps) => {
  const { data = [], isLoading } = useInterviews();
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
                        <Icons.ChevronsUpDown className="h-4 w-4" />
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
                <TableCell
                  key={cell.id}
                  className="max-w-32 overflow-hidden overflow-ellipsis whitespace-nowrap lg:max-w-60"
                >
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
