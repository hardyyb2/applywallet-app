"use client";

import * as React from "react";

import { DayPicker } from "react-day-picker";

import { cnMerge } from "@/utils/styles";

import { buttonVariants } from "../Button";
import { Icons } from "../Icons";
import { typographyVariants } from "../Typography";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

const Calendar = ({
  className,
  classNames,
  showOutsideDays = true,
  components,
  ...props
}: CalendarProps) => {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cnMerge("p-2", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: typographyVariants({ variant: "subtitle1" }),
        nav: "space-x-1 flex items-center",
        nav_button: cnMerge(
          buttonVariants({ variant: "outline" }),
          "h-12 w-12 bg-transparent p-0 opacity-50 hover:opacity-100",
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: cnMerge(
          typographyVariants({ variant: "subtitle2" }),
          "text-base-content/50 rounded-md w-8",
        ),
        row: "flex w-full mt-2",
        cell: cnMerge(
          "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50",
          props.mode === "range"
            ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md"
            : "[&:has([aria-selected])]:rounded-md",
        ),
        day: cnMerge(
          buttonVariants({ color: "ghost" }),
          "h-12 w-12 p-0 font-normal aria-selected:opacity-100",
        ),
        day_range_start: "day-range-start",
        day_range_end: "day-range-end",
        day_selected:
          "bg-primary text-primary-content hover:bg-primary hover:text-primary-content focus:bg-primary focus:text-primary-content",
        day_today: "bg-secondary text-secondary-content",
        day_outside:
          "day-outside opacity-50 aria-selected:bg-accent/50 aria-selected:opacity-30",
        day_disabled: "opacity-50",
        day_range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-content",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: (props) => (
          <Icons.ChevronLeft className="h-4 w-4" {...props} />
        ),
        IconRight: (props) => (
          <Icons.ChevronRight className="h-4 w-4" {...props} />
        ),
        ...components,
      }}
      {...props}
    />
  );
};
Calendar.displayName = "Calendar";

export { Calendar };
