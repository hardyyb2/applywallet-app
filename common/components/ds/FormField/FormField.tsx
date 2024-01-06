"use client";

import { type ReactNode } from "react";

import { ConditionalMatch } from "@dx-kit/react-conditional-match";

import { cnM } from "@/utils/styles";

import { FormFieldContext } from "./formField.utils";
import { FormFieldCheckbox } from "./FormFieldCheckbox";
import { FormFieldDatePicker } from "./FormFieldDatePicker";
import { FormFieldDatePickerInput } from "./FormFieldDatePickerInput";
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
    <fieldset className={cnM("dui-form-control", className)}>
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
  RTBaseEditor: FormFieldRTBaseEditor,
  Checkbox: FormFieldCheckbox,
});

export { FormFieldCompound as FormField };
