import {
  Controller,
  type Control,
  type FieldPath,
  type FieldValues,
} from "react-hook-form";
import { z } from "zod";

import { Select, type SelectProps } from "../Select";
import { useFormControlContext } from "./formControl.utils";

const optionSchema = z.object({
  value: z.string(),
});

interface FormControlSelectProps<T extends FieldValues>
  extends Omit<SelectProps, "name"> {
  name: FieldPath<T>;
  control: Control<T>;
}

function FormControlSelect<T extends FieldValues>({
  name,
  control,
  options,
  color,
  ...props
}: FormControlSelectProps<T>) {
  const { error = "", htmlFor } = useFormControlContext();

  console.log("haadn yan", error);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, ref: _ref, ...field } }) => (
        <Select
          {...props}
          {...field}
          options={options}
          value={options?.find((option) => {
            const parsedOption = optionSchema.safeParse(option);

            if (!parsedOption.success) {
              throw new Error(
                `FormControlSelect: option does not have a value prop - ${parsedOption.error.issues[0].message}`,
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
              `FormControlSelect: option does not have a value prop - ${parsedOption.error.issues[0].message}`,
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
FormControlSelect.displayName = "FormControlSelect";

export { FormControlSelect };
