import { useState } from "react";

import { UseBooleanHandlerType } from "./useBoolean.types";

interface UseBooleanProps {
  initialVal?: boolean;
}

const useBoolean: UseBooleanHandlerType<UseBooleanProps> = ({
  initialVal = false,
}) => {
  const [value, setValue] = useState(initialVal);

  const toggle = () => {
    setValue((prevValue) => !prevValue);
  };

  const reset = () => {
    setValue(initialVal);
  };

  return [value, { toggle, reset, setValue }];
};

export { useBoolean };

console.log("[RENDER] hooks/useBoolean/useBoolean.tsx");