import { Textarea, type TextareaProps } from "../Textarea";
import { useFormFieldContext } from "./formField.utils";

type FormFieldTextareaProps = TextareaProps;

const FormFieldTextarea = ({
  ref,
  color,
  ...props
}: FormFieldTextareaProps & {
  ref: React.RefObject<HTMLTextAreaElement>;
}) => {
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
};

FormFieldTextarea.displayName = "FormFieldTextarea";

export { FormFieldTextarea };
