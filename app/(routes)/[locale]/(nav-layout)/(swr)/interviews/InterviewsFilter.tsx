import type { Table } from "@tanstack/react-table";
import { useForm } from "react-hook-form";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ds/Accordion";
import { Button } from "~/components/ds/Button";
import { Flex } from "~/components/ds/Flex";
import { Icons } from "~/components/ds/Icons";

import type { InterviewType } from "@/lib/schema/interviews";

import { interviewTableColumnsMap } from "./interview.utils";

type InterviewsFilterProps = {
  table: Table<InterviewType>;
  onSubmit: () => void;
};

const InterviewsFilter = ({ table, onSubmit }: InterviewsFilterProps) => {
  const { watch, setValue, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Accordion type="multiple">
        {table
          .getAllColumns()
          .filter((column) => {
            return (
              column.getCanHide() && !["select", "actions"].includes(column.id)
            );
          })
          .map((column) => {
            const isColumnVisible = watch(column.id);

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

                    <Button
                      size="sm"
                      color="ghost"
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setValue(column.id, !isColumnVisible);
                      }}
                    >
                      {isColumnVisible ? <Icons.Eye /> : <Icons.EyeOff />}
                    </Button>
                  </Flex>
                </AccordionTrigger>
                <AccordionContent>{column.id}</AccordionContent>
              </AccordionItem>
            );
          })}
      </Accordion>
    </form>
  );
};

export { InterviewsFilter };
