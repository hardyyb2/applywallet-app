import { createContext, useContext } from "react";

const FormControlContext = createContext<{
  htmlFor: string;
  error?: string;
}>({ htmlFor: "" });

const useFormControlContext = () => {
  const context = useContext(FormControlContext);

  if (!context) {
    throw new Error(
      '"useFormControlContext" cannot be used outside FormControlContext.Provider.',
    );
  }

  return context;
};

export { FormControlContext, useFormControlContext };

console.log("[RENDER] components/isolated/wrapped/FormControl/formControl.utils.tsx");