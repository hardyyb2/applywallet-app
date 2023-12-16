import dayjs from "dayjs";

import { cn } from "@/utils/styles";

import { Button } from "../Button";
import { Calendar } from "../Calendar";
import { Icons } from "../Icons";
import { Input } from "../Input";
import {
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverTrigger,
} from "../Popover";
import type { DatePickerColorType } from "./datePicker.types";

type DatePickerInputProps = {
  date: Date | string | undefined;
  setDate: (date: DatePickerInputProps["date"]) => void;
  color?: DatePickerColorType;
};

const DatePickerInput = ({
  date,
  setDate,
  color = "ghost",
}: DatePickerInputProps) => {
  const dateVal = typeof date === "string" ? dayjs(date).toDate() : date;

  return (
    <Popover>
      <Input
        color={color}
        defaultValue={date ? dayjs(dateVal).format("DD/MM/YYYY") : undefined}
        onChange={(e) => setDate(e.target.value)}
        placeholder="dd/mm/yyyy"
        iconSeparate
        endIcon={
          <PopoverTrigger asChild>
            <Button
              color="ghost"
              size="sm"
              className="p-0"
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
        className="border border-base-content/40 p-4"
        collisionPadding={16}
        sideOffset={8}
        align="end"
        alignOffset={-8}
      >
        <Calendar
          mode="single"
          responsive
          selected={dateVal}
          onSelect={setDate}
          initialFocus
        />
        <PopoverArrow />
      </PopoverContent>
    </Popover>
  );
};

export { DatePickerInput, type DatePickerInputProps };
