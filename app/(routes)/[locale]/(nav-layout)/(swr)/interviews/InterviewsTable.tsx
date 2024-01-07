"use client";

import { useCallback, useMemo, useState, type ComponentProps } from "react";
import Link from "next/link";

import { useQueryClient } from "@tanstack/react-query";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnDef,
  type ColumnFiltersState,
  type SortingState,
  type VisibilityState,
} from "@tanstack/react-table";
import dayjs from "dayjs";
import { toast } from "react-toastify";

import { BarLoader } from "~/components/ds/BarLoader";
import { Button } from "~/components/ds/Button";
import { Checkbox } from "~/components/ds/Checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ds/DropdownMenu";
import { Flex } from "~/components/ds/Flex";
import { Icons } from "~/components/ds/Icons";
import { Input } from "~/components/ds/Input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ds/Table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ds/Tooltip";
import { ApiRoutes, AppRoutes } from "~/utils/routes";

import { appApi } from "@/lib/app-api";
import type { InterviewType } from "@/lib/schema/interviews";
import { useInterviews } from "@/queries/interviews.queries";
import { QueryKeys } from "@/utils/queries";

import {
  interviewResultOptionsMap,
  interviewStatusOptionsMap,
} from "./interview.utils";
import { InterviewsFilter } from "./InterviewsFilter";

const InterviewsTable = () => {
  // hooks
  const queryClient = useQueryClient();
  const { data = [], isLoading, error } = useInterviews();

  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});

  // functions
  const handleDeleteInterview = useCallback(
    (id: InterviewType["id"]) => {
      appApi
        .delete(ApiRoutes.deleteInterview(id))
        .then(() => {
          toast.success("interview deleted");
          queryClient.invalidateQueries({
            queryKey: [QueryKeys.INTERVIEWS],
          });
        })
        .catch(() => {
          toast.error("failed to delete interview, please try again");
        });
    },
    [queryClient],
  );

  // constants
  const columns = useMemo<ColumnDef<InterviewType>[]>(
    () => [
      {
        id: "select",
        header: ({ table }) => (
          <Checkbox
            responsive
            checked={
              table.getIsAllPageRowsSelected() ||
              (table.getIsSomePageRowsSelected() && "indeterminate")
            }
            onCheckedChange={(value) =>
              table.toggleAllPageRowsSelected(!!value)
            }
            aria-label="select all"
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            responsive
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="select row"
          />
        ),
        enableSorting: false,
        enableHiding: false,
      },
      {
        accessorKey: "status",
        header: "status",
        cell: ({ row }) => {
          const status = row.original.status;
          return (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  {interviewStatusOptionsMap[status].icon}
                </TooltipTrigger>
                <TooltipContent color="neutral">
                  {interviewStatusOptionsMap[status].label}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          );
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
        enableHiding: false,
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
                <DropdownMenuItem
                  className="gap-2 text-error"
                  onClick={() => handleDeleteInterview(interview.id)}
                >
                  <Icons.Trash2 className="w-4 lg:w-5" />
                  delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          );
        },
      },
    ],
    [handleDeleteInterview],
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
    },
  });

  const filtersApplied = useMemo(
    () =>
      columnFilters.length > 0 ||
      Object.values(columnVisibility).some((val) => val === true),
    [columnFilters, columnVisibility],
  );

  const onFilterFormSubmit: ComponentProps<
    typeof InterviewsFilter
  >["onSubmit"] = (values) => {
    setColumnVisibility(values.visibility);
  };

  if (isLoading) {
    return <BarLoader />;
  }

  if (error) {
    return <div>error</div>;
  }

  return (
    <Flex className="gap-3xs" direction="column">
      <Flex className="gap-2xs rounded-xl bg-base-100 p-3xs" justify="flex-end">
        <Input
          bordered={false}
          responsive
          placeholder="search company..."
          value={
            (table.getColumn("company_name")?.getFilterValue() as string) ?? ""
          }
          onChange={(event) =>
            table.getColumn("company_name")?.setFilterValue(event.target.value)
          }
        />
        <InterviewsFilter
          table={table}
          onSubmit={onFilterFormSubmit}
          filtersApplied={filtersApplied}
        />
      </Flex>
      <div className="overflow-auto rounded-xl bg-base-100">
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
                          align="center"
                          onClick={header.column.getToggleSortingHandler()}
                        >
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                          <Icons.ChevronsUpDown className="h-3 w-3 lg:h-4 lg:w-4" />
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
    </Flex>
  );
};

export { InterviewsTable };
