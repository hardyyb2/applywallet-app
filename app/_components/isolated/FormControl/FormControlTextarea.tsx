import { forwardRef } from "react";

import { Textarea, TextareaProps } from "../Textarea";
import { useFormControlContext } from "./formControl.utils";

type FormControlTextareaProps = TextareaProps;

const FormControlTextarea = forwardRef<
  HTMLTextAreaElement,
  FormControlTextareaProps
>((props, ref) => {
  const { error = "", htmlFor } = useFormControlContext();

  return (
    <Textarea
      id={htmlFor}
      color={Boolean(error) ? "error" : "primary"}
      aria-invalid={Boolean(error) ? "true" : "false"}
      {...props}
      ref={ref}
    />
  );
});

FormControlTextarea.displayName = "FormControlTextarea";

export { FormControlTextarea };
