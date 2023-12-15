import { DatePickerInput, type DatePickerProps } from "../DatePicker";
import { useFormControlContext } from "./formControl.utils";

type FormControlDatePickerInputProps = DatePickerProps;

const FormControlDatePickerInput = ({
  color,
  ...props
}: FormControlDatePickerInputProps) => {
  const { error = "" } = useFormControlContext();

  return (
    <DatePickerInput
      color={Boolean(error) ? "error" : color}
      aria-invalid={Boolean(error) ? "true" : "false"}
      {...props}
    />
  );
};

FormControlDatePickerInput.displayName = "FormControlDatePickerInput";

export { FormControlDatePickerInput };
