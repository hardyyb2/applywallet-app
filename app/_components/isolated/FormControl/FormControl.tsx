"use client";

import { ReactNode } from "react";

import { FormControlContext } from "./formControl.utils";
import { FormControlInput } from "./FormControlInput";
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
});

export { FormControlCompound as FormControl };
