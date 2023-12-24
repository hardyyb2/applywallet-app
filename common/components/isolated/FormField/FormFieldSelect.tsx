import {
  Controller,
  type Control,
  type FieldPath,
  type FieldValues,
} from "react-hook-form";
import { z } from "zod";

import { Select, type SelectProps } from "../Select";
import { useFormFieldContext } from "./formField.utils";

const optionSchema = z.object({
  value: z.string(),
});

interface FormFieldSelectProps<T extends FieldValues>
  extends Omit<SelectProps, "name"> {
  name: FieldPath<T>;
  control: Control<T>;
}

function FormFieldSelect<T extends FieldValues>({
  name,
  control,
  options,
  color,
  responsive = true,
  ...props
}: FormFieldSelectProps<T>) {
  const { error = "", htmlFor } = useFormFieldContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, ref: _ref, ...field } }) => (
        <Select
          responsive={responsive}
          {...props}
          {...field}
          options={options}
          value={options?.find((option) => {
            const parsedOption = optionSchema.safeParse(option);

            if (!parsedOption.success) {
              throw new Error(
                `FormFieldSelect: option does not have a value prop - ${parsedOption.error.issues[0].message}`,
              );
            }

            return parsedOption.data.value === field.value;
          })}
          onChange={(option) => {
            const parsedOption = optionSchema.safeParse(option);
            if (parsedOption.success) {
              onChange(parsedOption.data.value);
              return;
            }

            throw new Error(
              `FormFieldSelect: option does not have a value prop - ${parsedOption.error.issues[0].message}`,
            );
          }}
          id={htmlFor}
          color={Boolean(error) ? "error" : color}
          aria-invalid={Boolean(error) ? "true" : "false"}
        />
      )}
    />
  );
}
FormFieldSelect.displayName = "FormFieldSelect";

export { FormFieldSelect };
