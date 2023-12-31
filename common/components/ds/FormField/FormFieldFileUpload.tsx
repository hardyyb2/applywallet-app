import {
  Controller,
  type Control,
  type FieldPath,
  type FieldValues,
} from "react-hook-form";

import {
  FileUpload,
  FileUploadInput,
  FileUploadLabel,
  FileUploadProvider,
  type FileUploadProviderProps,
} from "../FileUpload";
import { useFormFieldContext } from "./formField.utils";

interface FormFieldRTBaseEditorProps<T extends FieldValues>
  extends FileUploadProviderProps {
  name: FieldPath<T>;
  control: Control<T>;
}

const FormFieldRTBaseEditor = <T extends FieldValues>({
  name,
  control,
  multiple = false,
  color,
  ...props
}: FormFieldRTBaseEditorProps<T>) => {
  const { error = "", htmlFor } = useFormFieldContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FileUploadProvider color={Boolean(error) ? "error" : color} {...props}>
          <FileUpload>
            <FileUploadInput
              onChange={(e) => {
                field.onChange(multiple ? e.target.files : e.target.files?.[0]);
              }}
              id={htmlFor}
              aria-invalid={Boolean(error) ? "true" : "false"}
            />
            <FileUploadLabel />
          </FileUpload>
        </FileUploadProvider>
      )}
    />
  );
};

export { FormFieldRTBaseEditor };
