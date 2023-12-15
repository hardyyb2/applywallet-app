"use client";

import { type ReactNode } from "react";

import { FormControlContext } from "./formControl.utils";
import { FormControlDatePicker } from "./FormControlDatePicker";
import { FormControlDatePickerInput } from "./FormControlDatePickerInput";
import { FormControlInput } from "./FormControlInput";
import { FormControlSelect } from "./FormControlSelect";
import { FormControlTextarea } from "./FormControlTextarea";

interface FormControlProps {
  children: ReactNode;
  label: string;
  htmlFor: string;
  error?: string;
}

const FormControl = ({
  children,
  label,
  htmlFor,
  error = "",
}: FormControlProps) => {
  return (
    <fieldset className="form-control">
      <label className="label" htmlFor={htmlFor} aria-label={label}>
        <span className="label-text-alt">{label}</span>
      </label>
      <FormControlContext.Provider value={{ error, htmlFor }}>
        {children}
      </FormControlContext.Provider>
      {error && (
        <label className="label" htmlFor={htmlFor}>
          <span className="label-text-alt text-error">{error}</span>
        </label>
      )}
    </fieldset>
  );
};

const FormControlCompound = Object.assign(FormControl, {
  Input: FormControlInput,
  Textarea: FormControlTextarea,
  Select: FormControlSelect,
  DatePicker: FormControlDatePicker,
  DatePickerInput: FormControlDatePickerInput,
});

export { FormControlCompound as FormControl };
