import { forwardRef } from "react";

import { Textarea, type TextareaProps } from "../Textarea";
import { useFormFieldContext } from "./FormField.utils";

type FormFieldTextareaProps = TextareaProps;

const FormFieldTextarea = forwardRef<
  HTMLTextAreaElement,
  FormFieldTextareaProps
>(({ color, ...props }, ref) => {
  const { error = "", htmlFor } = useFormFieldContext();

  return (
    <Textarea
      id={htmlFor}
      color={Boolean(error) ? "error" : color}
      aria-invalid={Boolean(error) ? "true" : "false"}
      {...props}
      ref={ref}
    />
  );
});

FormFieldTextarea.displayName = "FormFieldTextarea";

export { FormFieldTextarea };
