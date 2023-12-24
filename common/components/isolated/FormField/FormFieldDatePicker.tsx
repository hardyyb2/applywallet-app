import {
  Controller,
  type Control,
  type FieldPath,
  type FieldValues,
} from "react-hook-form";

import { DatePicker, type DatePickerProps } from "../DatePicker";
import { useFormFieldContext } from "./formField.utils";

interface FormFieldDatePickerProps<T extends FieldValues>
  extends Omit<DatePickerProps, "date" | "setDate"> {
  name: FieldPath<T>;
  control: Control<T>;
}

const FormFieldDatePicker = <T extends FieldValues>({
  color,
  name,
  control,
  ...props
}: FormFieldDatePickerProps<T>) => {
  const { error = "" } = useFormFieldContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <DatePicker
          {...props}
          color={Boolean(error) ? "error" : color}
          aria-invalid={Boolean(error) ? "true" : "false"}
          date={value}
          setDate={onChange}
        />
      )}
    />
  );
};

FormFieldDatePicker.displayName = "FormFieldDatePicker";

export { FormFieldDatePicker };
