import { DatePickerInput, type DatePickerProps } from "../DatePicker";
import { useFormFieldContext } from "./formField.utils";

type FormFieldDatePickerInputProps = DatePickerProps;

const FormFieldDatePickerInput = ({
  color,
  ...props
}: FormFieldDatePickerInputProps) => {
  const { error = "" } = useFormFieldContext();

  return (
    <DatePickerInput
      color={Boolean(error) ? "error" : color}
      aria-invalid={Boolean(error) ? "true" : "false"}
      {...props}
    />
  );
};

FormFieldDatePickerInput.displayName = "FormFieldDatePickerInput";

export { FormFieldDatePickerInput };
