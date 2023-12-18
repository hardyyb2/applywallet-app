import { useState } from "react";

import dayjs from "dayjs";

import { cn } from "@/utils/styles";

import { Button } from "../Button";
import { Calendar } from "../Calendar";
import { Icons } from "../Icons";
import { Input } from "../Input";
import { Popover, PopoverContent, PopoverTrigger } from "../Popover";
import type { DatePickerColorType } from "./datePicker.types";

type DatePickerInputProps = {
  /** Date in ISO format */
  date: string | undefined;
  setDate: (date: DatePickerInputProps["date"]) => void;
  color?: DatePickerColorType;
};

const DatePickerInput = ({
  date,
  setDate,
  color = "ghost",
}: DatePickerInputProps) => {
  // we do not accept date object to keep frontend and backend consistent
  const isValidDate = typeof date === "string" && dayjs(date).isValid();
  const dateObj = isValidDate ? dayjs(date).toDate() : undefined;

  const [dateInputValue, setDateInputValue] = useState<string | undefined>(
    date ? dayjs(date).format("YYYY-MM-DD") : "",
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setDateInputValue(value);

    const date = dayjs(value);
    if (date.isValid()) {
      setDate(date.toISOString());
    }
  };

  const handleDateSelect = (selectedDate: Date | undefined) => {
    setDateInputValue(dayjs(selectedDate).format("YYYY-MM-DD"));
    setDate(dayjs(selectedDate).toISOString());
  };

  return (
    <Popover>
      <Input
        color={color}
        type="date"
        value={dateInputValue}
        onChange={handleInputChange}
        placeholder="dd/mm/yyyy"
        iconSeparate
        iconWrapperClassName="w-full h-full"
        endIcon={
          <PopoverTrigger asChild>
            <Button
              color={color}
              variant="outline"
              className="w-20 p-0 hover:!bg-transparent"
              startIcon={
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
        }
      />

      <PopoverContent
        className="p-4"
        collisionPadding={16}
        sideOffset={8}
        align="end"
      >
        <Calendar
          data-testid="date-picker-input-calendar"
          mode="single"
          responsive
          selected={dateObj}
          onSelect={handleDateSelect}
          initialFocus
          defaultMonth={dateObj}
        />
      </PopoverContent>
    </Popover>
  );
};

export { DatePickerInput, type DatePickerInputProps };
