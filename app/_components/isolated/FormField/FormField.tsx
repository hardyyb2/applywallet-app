"use client";

import { type ReactNode } from "react";

import { ConditionalMatch } from "@dx-kit/react-conditional-match";

import { FormFieldContext } from "./formField.utils";
import { FormFieldDatePicker } from "./FormFieldDatePicker";
import { FormFieldDatePickerInput } from "./FormFieldDatePickerInput";
import { FormFieldInput } from "./FormFieldInput";
import { FormFieldSelect } from "./FormFieldSelect";
import { FormFieldTextarea } from "./FormFieldTextarea";

interface FormFieldProps {
  children: ReactNode;
  label: ReactNode;
  description?: ReactNode;
  htmlFor: string;
  error?: string;
}

const FormField = ({
  children,
  label,
  htmlFor,
  description = null,
  error = "",
}: FormFieldProps) => {
  return (
    <fieldset className="dui-form-control">
      <label
        className="dui-label"
        htmlFor={htmlFor}
        aria-label={typeof label === "string" ? label : undefined}
      >
        <span className="dui-label-text">{label}</span>
      </label>
      <FormFieldContext.Provider value={{ error, htmlFor }}>
        {children}
      </FormFieldContext.Provider>

      <ConditionalMatch fallback={null}>
        <ConditionalMatch.Render when={error}>
          <label className="dui-label" htmlFor={htmlFor}>
            <span className="dui-label-text-alt text-error">{error}</span>
          </label>
        </ConditionalMatch.Render>
        <ConditionalMatch.Render when={!error && description}>
          <label className="dui-label" htmlFor={htmlFor}>
            <span className="dui-label-text-alt">{description}</span>
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
});

export { FormFieldCompound as FormField };
