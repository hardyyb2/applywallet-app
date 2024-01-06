import {
  Controller,
  type Control,
  type FieldPath,
  type FieldValues,
} from "react-hook-form";

import { Checkbox, type CheckboxProps } from "../Checkbox";
import { useFormFieldContext } from "./formField.utils";

interface FormFieldCheckboxProps<T extends FieldValues> extends CheckboxProps {
  name: FieldPath<T>;
  control: Control<T>;
}

function FormFieldCheckbox<T extends FieldValues>({
  color,
  name,
  control,
  responsive = true,
  ...props
}: FormFieldCheckboxProps<T>) {
  const { error = "", htmlFor } = useFormFieldContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, ref, ...field } }) => (
        <Checkbox
          id={htmlFor}
          color={Boolean(error) ? "error" : color}
          aria-invalid={Boolean(error) ? "true" : "false"}
          responsive={responsive}
          {...props}
          ref={ref}
          checked={field.value}
          onCheckedChange={onChange}
        />
      )}
    />
  );
}

FormFieldCheckbox.displayName = "FormFieldCheckbox";

export { FormFieldCheckbox };
