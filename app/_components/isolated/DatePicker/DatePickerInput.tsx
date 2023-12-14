import dayjs from "dayjs";

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

type DatePickerInputProps = {
  date: Date;
  setDate: (date: Date | undefined) => void;
};

const DatePickerInput = ({ date, setDate }: DatePickerInputProps) => {
  return (
    <Popover>
      <Input
        value={dayjs(date).format("DD/MM/YYYY")}
        placeholder="dd/mm/yyyy"
        endIcon={
          <PopoverTrigger asChild>
            <Button
              color="ghost"
              size="sm"
              className="p-0"
              startIcon={<Icons.Calendar />}
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
