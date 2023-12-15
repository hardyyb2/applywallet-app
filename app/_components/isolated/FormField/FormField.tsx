"use client";

import { type ReactNode } from "react";

import { FormFieldContext } from "./formField.utils";
import { FormFieldDatePicker } from "./FormFieldDatePicker";
import { FormFieldDatePickerInput } from "./FormFieldDatePickerInput";
import { FormFieldInput } from "./FormFieldInput";
import { FormFieldSelect } from "./FormFieldSelect";
import { FormFieldTextarea } from "./FormFieldTextarea";

interface FormFieldProps {
  children: ReactNode;
  label: string;
  htmlFor: string;
  error?: string;
}

const FormField = ({
  children,
  label,
  htmlFor,
  error = "",
}: FormFieldProps) => {
  return (
    <fieldset className="form-control">
      <label className="label" htmlFor={htmlFor} aria-label={label}>
        <span className="label-text-alt">{label}</span>
      </label>
      <FormFieldContext.Provider value={{ error, htmlFor }}>
        {children}
      </FormFieldContext.Provider>
      {error && (
        <label className="label" htmlFor={htmlFor}>
          <span className="label-text-alt text-error">{error}</span>
        </label>
      )}
    </fieldset>
  );
};

const FormFieldCompound = Object.assign(FormField, {
  Input: FormFieldInput,
  Textarea: FormFieldTextarea,
  Select: FormFieldSelect,
  DatePicker: FormFieldDatePicker,
  DatePickerInput: FormFieldDatePickerInput,
});

export { FormFieldCompound as FormField };
