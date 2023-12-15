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
  date: Date | undefined;
  setDate: (date: Date | undefined) => void;
  color?: DatePickerColorType;
};

const DatePickerInput = ({
  date,
  setDate,
  color = "ghost",
}: DatePickerInputProps) => {
  return (
    <Popover>
      <Input
        color={color}
        value={date ? dayjs(date).format("DD/MM/YYYY") : undefined}
        placeholder="dd/mm/yyyy"
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
          selected={date}
          onSelect={setDate}
          initialFocus
        />
        <PopoverArrow />
      </PopoverContent>
    </Popover>
  );
};

export { DatePickerInput, type DatePickerInputProps };
