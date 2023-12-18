import dayjs from "dayjs";

import { cn } from "@/utils/styles";

import { Calendar } from "../Calendar";
import { Icons } from "../Icons";
import { Input } from "../Input";
import { Popover, PopoverContent, PopoverTrigger } from "../Popover";
import type { DatePickerColorType } from "./datePicker.types";

type DatePickerProps = {
  /** Date in ISO format */
  date: string | undefined;
  setDate: (date: string | undefined) => void;
  color?: DatePickerColorType;
};

const DatePicker = ({ date, setDate, color = "ghost" }: DatePickerProps) => {
  // we do not accept date object to keep frontend and backend consistent
  const isValidDate = typeof date === "string" && dayjs(date).isValid();
  const dateObj = isValidDate ? dayjs(date).toDate() : undefined;

  return (
    <Popover>
      <PopoverTrigger className="w-full">
        <Input
          color={color}
          defaultValue={date ? dayjs(date).format("DD/MM/YYYY") : undefined}
          placeholder="dd/mm/yyyy"
          role="button"
          className="w-full text-left"
          readOnly
          iconWrapperClassName="pointer-events-none"
          endIcon={
            <Icons.Calendar
              className={cn(
                "cursor-pointer",
                color === "primary" && "stroke-primary",
                color === "secondary" && "stroke-secondary",
                color === "accent" && "stroke-accent",
                color === "ghost" && "stroke-base-content",
                color === "error" && "stroke-error",
                color === "warning" && "stroke-warning",
                color === "success" && "stroke-success",
                color === "info" && "stroke-info",
              )}
            />
          }
        />
      </PopoverTrigger>

      <PopoverContent
        className="p-4"
        collisionPadding={16}
        sideOffset={8}
        align="end"
      >
        <Calendar
          data-testid="date-picker-calendar"
          mode="single"
          responsive
          selected={dateObj}
          onSelect={(day) => setDate(dayjs(day).toISOString())}
          defaultMonth={dateObj}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
};

export { DatePicker, type DatePickerProps };
