"use client";

import type { Table } from "@tanstack/react-table";
import { useForm } from "react-hook-form";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ds/Accordion";
import { Badge } from "~/components/ds/Badge";
import { Button, buttonVariants } from "~/components/ds/Button";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerPortal,
  DrawerTitle,
  DrawerTrigger,
} from "~/components/ds/Drawer";
import { Flex } from "~/components/ds/Flex";
import { Icons } from "~/components/ds/Icons";
import { Indicator, indicatorItemVariants } from "~/components/ds/Indicator";
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

import { useBreakPoint } from "@/hooks/useBreakPoint";
import type { InterviewType } from "@/lib/schema/interviews";
import { cnM } from "@/utils/styles";

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
  filtersApplied?: boolean;
};

const InterviewsFilter = ({
  table,
  onSubmit,
  filtersApplied = false,
}: InterviewsFilterProps) => {
  // hooks
  const { isBelowLg } = useBreakPoint("lg");
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

  // functions
  const handleReset = () => {
    reset();
    table.resetColumnVisibility();
  };

  // constants
  const content = (
    <form onSubmit={handleSubmit(onSubmit)} id={INTERVIEWS_FILTER_FORM_ID}>
      <Accordion type="multiple">
        {table
          .getAllColumns()
          .filter((column) => {
            return (
              column.getCanHide() && !["select", "actions"].includes(column.id)
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
                    {interviewTableColumnsMap[column.id as keyof InterviewType]
                      ?.label ?? ""}

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
                          `visibility.${column.id as keyof InterviewType}`,
                          !isColumnVisible,
                        );
                      }}
                    >
                      {isColumnVisible ? <Icons.Eye /> : <Icons.EyeOff />}
                    </span>
                  </Flex>
                </AccordionTrigger>
                <AccordionContent>more filters soon</AccordionContent>
              </AccordionItem>
            );
          })}
      </Accordion>
    </form>
  );

  const footerActions = (
    <>
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
    </>
  );

  if (isBelowLg) {
    return (
      <Drawer
        // TODO - update vaul when this is fixed
        shouldScaleBackground={false}
      >
        <DrawerTrigger asChild>
          <Button
            responsive
            startIcon={<Icons.SlidersHorizontal />}
            aria-label="filters"
          />
        </DrawerTrigger>
        <DrawerPortal>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>filters</DrawerTitle>
            </DrawerHeader>
            <div className="h-full overflow-y-auto p-2xs pb-3xl">{content}</div>
            <DrawerFooter className="flex-col items-stretch gap-2 md:flex-row">
              {footerActions}
            </DrawerFooter>
          </DrawerContent>
        </DrawerPortal>
      </Drawer>
    );
  }

  return (
    <Sheet>
      <SheetTrigger>
        <Indicator>
          <div
            className={buttonVariants({
              responsive: true,
            })}
          >
            {filtersApplied ? (
              <Badge
                size="sm"
                color="accent"
                className={cnM(indicatorItemVariants())}
              />
            ) : null}
            <Icons.SlidersHorizontal />
            filters
          </div>
        </Indicator>
      </SheetTrigger>
      <SheetPortal>
        <SheetOverlay />

        <SheetContent>
          <SheetHeader>
            <SheetTitle>filters</SheetTitle>
          </SheetHeader>

          <div className="h-full overflow-y-auto p-s pb-3xl">{content}</div>

          <SheetFooter className="flex-col items-stretch gap-2 md:flex-row">
            {footerActions}
          </SheetFooter>
        </SheetContent>
      </SheetPortal>
    </Sheet>
  );
};

export { InterviewsFilter };
