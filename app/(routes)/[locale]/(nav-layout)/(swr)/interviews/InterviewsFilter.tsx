import type { Table } from "@tanstack/react-table";
import { useForm } from "react-hook-form";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ds/Accordion";
import { Button, buttonVariants } from "~/components/ds/Button";
import { Flex } from "~/components/ds/Flex";
import { Icons } from "~/components/ds/Icons";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetOverlay,
  SheetPortal,
  SheetTitle,
  SheetTrigger,
} from "~/components/ds/Sheet";

import type { InterviewType } from "@/lib/schema/interviews";

import {
  INTERVIEWS_FILTER_FORM_ID,
  interviewTableColumnsMap,
} from "./interview.utils";

type InterviewsFilterFormType = {
  visibility: Record<keyof InterviewType, boolean>;
};

type InterviewsFilterProps = {
  table: Table<InterviewType>;
  onSubmit: (values: InterviewsFilterFormType) => void;
};

const InterviewsFilter = ({ table, onSubmit }: InterviewsFilterProps) => {
  const { watch, setValue, handleSubmit, reset } =
    useForm<InterviewsFilterFormType>({
      defaultValues: {
        visibility: Object.fromEntries(
          table
            .getAllColumns()
            .map((column) => [column.id, column.getIsVisible() ?? true]),
        ),
      },
    });

  const handleReset = () => {
    reset();
    table.resetColumnVisibility();
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button responsive startIcon={<Icons.SlidersHorizontal />}>
          filters
        </Button>
      </SheetTrigger>
      <SheetPortal>
        <SheetOverlay />

        <SheetContent>
          <SheetHeader>
            <SheetTitle>filters</SheetTitle>
          </SheetHeader>

          <div className="h-full overflow-y-auto p-s pb-3xl">
            <form
              onSubmit={handleSubmit(onSubmit)}
              id={INTERVIEWS_FILTER_FORM_ID}
            >
              <Accordion type="multiple">
                {table
                  .getAllColumns()
                  .filter((column) => {
                    return (
                      column.getCanHide() &&
                      !["select", "actions"].includes(column.id)
                    );
                  })
                  .map((column) => {
                    const isColumnVisible = watch(
                      `visibility.${column.id as keyof InterviewType}`,
                    );

                    return (
                      <AccordionItem key={column.id} value={column.id}>
                        <AccordionTrigger className="flex-1">
                          <Flex
                            className="flex-1 pr-3xs"
                            justify="space-between"
                            align="center"
                          >
                            {interviewTableColumnsMap[
                              column.id as keyof InterviewType
                            ]?.label ?? ""}

                            <span
                              role="checkbox"
                              aria-checked={isColumnVisible}
                              className={buttonVariants({
                                color: "ghost",
                                size: "sm",
                              })}
                              onClick={(e) => {
                                e.stopPropagation();
                                setValue(
                                  `visibility.${
                                    column.id as keyof InterviewType
                                  }`,
                                  !isColumnVisible,
                                );
                              }}
                            >
                              {isColumnVisible ? (
                                <Icons.Eye />
                              ) : (
                                <Icons.EyeOff />
                              )}
                            </span>
                          </Flex>
                        </AccordionTrigger>
                        <AccordionContent>more filters soon</AccordionContent>
                      </AccordionItem>
                    );
                  })}
              </Accordion>
            </form>
          </div>

          <SheetFooter className="flex-col items-stretch gap-2 md:flex-row">
            <Button
              color="primary"
              responsive
              type="submit"
              className="mt-xs flex-1"
              form={INTERVIEWS_FILTER_FORM_ID}
            >
              submit
            </Button>
            <Button
              responsive
              onClick={handleReset}
              className="mt-3xs flex-1 md:mt-xs"
            >
              reset
            </Button>
          </SheetFooter>
        </SheetContent>
      </SheetPortal>
    </Sheet>
  );
};

export { InterviewsFilter };
