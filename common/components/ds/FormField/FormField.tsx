"use client";

import { type ReactNode } from "react";

import { ConditionalMatch } from "@dx-kit/react-conditional-match";

import { cnM } from "@/utils/styles";

import { FormFieldContext } from "./formField.utils";
import { FormFieldCheckbox } from "./FormFieldCheckbox";
import { FormFieldDatePicker } from "./FormFieldDatePicker";
import { FormFieldDatePickerInput } from "./FormFieldDatePickerInput";
import { FormFieldFileUpload } from "./FormFieldFileUpload";
import { FormFieldInput } from "./FormFieldInput";
import { FormFieldRTBaseEditor } from "./FormFieldRTBaseEditor";
import { FormFieldSelect } from "./FormFieldSelect";
import { FormFieldTextarea } from "./FormFieldTextarea";

interface FormFieldProps {
  children: ReactNode;
  label?: ReactNode;
  description?: ReactNode;
  htmlFor: string;
  error?: string;
  className?: string;
}

const FormField = ({
  children,
  label,
  htmlFor,
  description = null,
  error = "",
  className,
}: FormFieldProps) => {
  return (
    <fieldset className={cnM("d-form-control", className)}>
      <label
        className="d-label"
        htmlFor={htmlFor}
        aria-label={typeof label === "string" ? label : undefined}
      >
        <span className="d-label-text">{label}</span>
      </label>
      <FormFieldContext.Provider value={{ error, htmlFor }}>
        {children}
      </FormFieldContext.Provider>

      <ConditionalMatch fallback={null}>
        <ConditionalMatch.Render when={error}>
          <label className="d-label" htmlFor={htmlFor}>
            <span className="d-label-text-alt text-error">{error}</span>
          </label>
        </ConditionalMatch.Render>
        <ConditionalMatch.Render when={!error && description}>
          <label className="d-label" htmlFor={htmlFor}>
            <span className="d-label-text-alt">{description}</span>
          </label>
        </ConditionalMatch.Render>
      </ConditionalMatch>
    </fieldset>
  );
};

const FormFieldCompound = Object.assign(FormField, {
  Input: FormFieldInput,
  Textarea: FormFieldTextarea,
  Select: FormFieldSelect,
  DatePicker: FormFieldDatePicker,
  DatePickerInput: FormFieldDatePickerInput,
  RTBaseEditor: FormFieldRTBaseEditor,
  Checkbox: FormFieldCheckbox,
  FileUpload: FormFieldFileUpload,
});

export { FormFieldCompound as FormField };
