"use client";

import type { ComponentProps } from "react";

import { DayPicker } from "react-day-picker";

import { cnMerge } from "@/utils/styles";

import { buttonVariants } from "../Button";
import { Icons } from "../Icons";
import { typographyVariants } from "../Typography";

type CalendarProps = ComponentProps<typeof DayPicker> & {
  size?: "xs" | "sm" | "md";
  responsive?: boolean;
};

const Calendar = ({
  className,
  classNames,
  showOutsideDays = true,
  components,
  size = "md",
  responsive = false,
  ...props
}: CalendarProps) => {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cnMerge("p-2", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-8",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: typographyVariants({ variant: "subtitle1" }),
        nav: "space-x-1 flex items-center",
        nav_button: cnMerge(
          buttonVariants({ variant: "outline", color: "ghost" }),
          "p-0 opacity-50 hover:opacity-100",
          {
            "h-9 w-9": size === "xs",
            "h-10 w-10": size === "sm",
            "h-12 w-12": size === "md",
          },
          responsive && "h-9 w-9 sm:h-10 sm:w-10 md:h-12 md:w-12",
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: cnMerge(
          typographyVariants({ variant: "subtitle2" }),
          "text-base-content/75 rounded-md text-center",
          {
            "w-9": size === "xs",
            "w-10": size === "sm",
            "w-12": size === "md",
          },
          responsive && "w-9 sm:w-10 md:w-12",
        ),
        row: "flex justify-center w-full mt-2",
        cell: cnMerge(
          "text-sm relative p-0 text-center focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-primary [&:has([aria-selected].day-outside)]:bg-primary/50 [&:has([aria-selected].day-range-end)]:rounded-r-md",
          props.mode === "range"
            ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md"
            : "[&:has([aria-selected])]:rounded-md",
        ),
        day: cnMerge(
          buttonVariants({ color: "ghost" }),
          "p-0 aria-selected:opacity-100",
          {
            "w-9 h-9": size === "xs",
            "w-10 h-10": size === "sm",
            "w-12 h-12": size === "md",
          },
          responsive && "w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12",
        ),
        // TODO - check do these make any difference
        day_range_start: "day-range-start",
        day_range_end: "day-range-end",
        day_selected:
          "bg-primary text-primary-content hover:bg-primary hover:text-primary-content focus:bg-primary focus:text-primary-content",
        day_today: "bg-primary/10",
        day_outside:
          "day-outside opacity-25 aria-selected:bg-primary/20 aria-selected:opacity-30",
        day_disabled: "opacity-50",
        day_range_middle:
          "aria-selected:bg-primary aria-selected:text-primary-content",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: (props) => <Icons.ChevronLeft {...props} />,
        IconRight: (props) => <Icons.ChevronRight {...props} />,
        ...components,
      }}
      {...props}
    />
  );
};
Calendar.displayName = "Calendar";

export { Calendar, type CalendarProps };
