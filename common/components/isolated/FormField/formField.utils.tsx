import { createContext, useContext } from "react";

const FormFieldContext = createContext<{
  htmlFor: string;
  error?: string;
}>({ htmlFor: "" });

const useFormFieldContext = () => {
  const context = useContext(FormFieldContext);

  if (!context) {
    throw new Error(
      '"useFormFieldContext" cannot be used outside FormFieldContext.Provider.',
    );
  }

  return context;
};

export { FormFieldContext, useFormFieldContext };
