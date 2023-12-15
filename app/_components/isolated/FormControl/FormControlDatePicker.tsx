import { DatePicker, type DatePickerProps } from "../DatePicker";
import { useFormControlContext } from "./formControl.utils";

type FormControlDatePickerProps = DatePickerProps;

const FormControlDatePicker = ({
  color,
  ...props
}: FormControlDatePickerProps) => {
  const { error = "" } = useFormControlContext();

  return (
    <DatePicker
      color={Boolean(error) ? "error" : color}
      aria-invalid={Boolean(error) ? "true" : "false"}
      {...props}
    />
  );
};

FormControlDatePicker.displayName = "FormControlDatePicker";

export { FormControlDatePicker };
