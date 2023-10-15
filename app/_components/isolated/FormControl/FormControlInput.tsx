import { forwardRef } from "react";

import { Input, InputProps } from "../Input";
import { useFormControlContext } from "./formControl.utils";

type FormControlInputProps = InputProps;

const FormControlInput = forwardRef<HTMLInputElement, FormControlInputProps>(
  (props, ref) => {
    const { error = "", htmlFor } = useFormControlContext();

    return (
      <Input
        id={htmlFor}
        color={Boolean(error) ? "error" : "primary"}
        aria-invalid={Boolean(error) ? "true" : "false"}
        {...props}
        ref={ref}
      />
    );
  },
);

FormControlInput.displayName = "FormControlInput";

export { FormControlInput };
