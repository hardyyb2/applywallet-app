import dayjs from "dayjs";

import { cn } from "@/utils/styles";

import { Calendar } from "../Calendar";
import { Icons } from "../Icons";
import { Input } from "../Input";
import { Popover, PopoverContent, PopoverTrigger } from "../Popover";
import type { DatePickerColorType } from "./datePicker.types";

type DatePickerProps = {
  date: Date | undefined;
  setDate: (date: Date | undefined) => void;
  color?: DatePickerColorType;
};

const DatePicker = ({ date, setDate, color = "ghost" }: DatePickerProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Input
          color={color}
          value={dayjs(date).format("DD/MM/YYYY")}
          placeholder="dd/mm/yyyy"
          role="button"
          className="text-left"
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
        className="border border-base-content/40 p-4"
        collisionPadding={16}
        sideOffset={4}
        align="end"
        alignOffset={-8}
      >
        <Calendar
          mode="single"
          responsive
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
};

export { DatePicker, type DatePickerProps };
