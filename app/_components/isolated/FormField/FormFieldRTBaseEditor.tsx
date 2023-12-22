import {
  Controller,
  type Control,
  type FieldPath,
  type FieldValues,
} from "react-hook-form";

import {
  RTBaseEditor,
  type RTBaseEditorProps,
} from "@/components/rich-text/editors/RTBaseEditor";

import { useFormFieldContext } from "./formField.utils";

interface FormFieldRTBaseEditorProps<T extends FieldValues>
  extends RTBaseEditorProps {
  name: FieldPath<T>;
  control: Control<T>;
}

const FormFieldRTBaseEditor = <T extends FieldValues>({
  name,
  control,
  ...props
}: FormFieldRTBaseEditorProps<T>) => {
  const { error = "", htmlFor } = useFormFieldContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <RTBaseEditor
          {...props}
          id={htmlFor}
          initialValue={field.value}
          onChange={field.onChange}
        />
      )}
    />
  );
};

export { FormFieldRTBaseEditor };
