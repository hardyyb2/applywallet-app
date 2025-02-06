import { Input, type InputProps } from "../Input";
import { useFormFieldContext } from "./formField.utils";

type FormFieldInputProps = InputProps;

const FormFieldInput = ({
  ref,
  color,
  responsive = true,
  ...props
}: FormFieldInputProps) => {
  const { error = "", htmlFor } = useFormFieldContext();

  return (
    <Input
      id={htmlFor}
      color={Boolean(error) ? "error" : color}
      aria-invalid={Boolean(error) ? "true" : "false"}
      responsive={responsive}
      {...props}
      ref={ref}
    />
  );
};

FormFieldInput.displayName = "FormFieldInput";

export { FormFieldInput };
