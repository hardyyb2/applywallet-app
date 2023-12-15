import {
  Controller,
  type Control,
  type FieldPath,
  type FieldValues,
} from "react-hook-form";

import { DatePickerInput, type DatePickerInputProps } from "../DatePicker";
import { useFormFieldContext } from "./formField.utils";

interface FormFieldDatePickerInputProps<T extends FieldValues>
  extends Omit<DatePickerInputProps, "date" | "setDate"> {
  name: FieldPath<T>;
  control: Control<T>;
}

const FormFieldDatePickerInput = <T extends FieldValues>({
  color,
  name,
  control,
  ...props
}: FormFieldDatePickerInputProps<T>) => {
  const { error = "" } = useFormFieldContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value, name } }) => (
        <DatePickerInput
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

FormFieldDatePickerInput.displayName = "FormFieldDatePickerInput";

export { FormFieldDatePickerInput };
