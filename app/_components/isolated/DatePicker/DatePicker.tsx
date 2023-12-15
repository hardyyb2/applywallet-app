import dayjs from "dayjs";

import { Button } from "../Button";
import { Calendar } from "../Calendar";
import { Icons } from "../Icons";
import { Popover, PopoverContent, PopoverTrigger } from "../Popover";

type DatePickerProps = {
  date: Date;
  setDate: (date: Date | undefined) => void;
};

const DatePicker = ({ date, setDate }: DatePickerProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          color="ghost"
          className="w-full justify-between border border-base-content/20"
          endIcon={<Icons.Calendar />}
          animation={false}
        >
          {date ? (
            dayjs(date).format("DD/MM/YYYY")
          ) : (
            <span className="text-base-content/75">dd/mm/yyyy</span>
          )}
        </Button>
      </PopoverTrigger>

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
      </PopoverContent>
    </Popover>
  );
};

export { DatePicker, type DatePickerProps };
