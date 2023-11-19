import { forwardRef } from "react";

import { Textarea, type TextareaProps } from "../Textarea";
import { useFormControlContext } from "./formControl.utils";

type FormControlTextareaProps = TextareaProps;

const FormControlTextarea = forwardRef<
  HTMLTextAreaElement,
  FormControlTextareaProps
>(({ color, ...props }, ref) => {
  const { error = "", htmlFor } = useFormControlContext();

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

FormControlTextarea.displayName = "FormControlTextarea";

export { FormControlTextarea };
