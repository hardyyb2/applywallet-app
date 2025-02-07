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

interface FormFieldFileUploadProps<T extends FieldValues>
  extends FileUploadProviderProps {
  name: FieldPath<T>;
  control: Control<T>;
}

const FormFieldFileUpload = <T extends FieldValues>({
  name,
  control,
  multiple = false,
  color,
  ...props
}: FormFieldFileUploadProps<T>) => {
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

export { FormFieldFileUpload };
