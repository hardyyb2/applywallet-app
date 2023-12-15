import { DatePicker, type DatePickerProps } from "../DatePicker";
import { useFormFieldContext } from "./formField.utils";

type FormFieldDatePickerProps = DatePickerProps;

const FormFieldDatePicker = ({ color, ...props }: FormFieldDatePickerProps) => {
  const { error = "" } = useFormFieldContext();

  return (
    <DatePicker
      color={Boolean(error) ? "error" : color}
      aria-invalid={Boolean(error) ? "true" : "false"}
      {...props}
    />
  );
};

FormFieldDatePicker.displayName = "FormFieldDatePicker";

export { FormFieldDatePicker };
