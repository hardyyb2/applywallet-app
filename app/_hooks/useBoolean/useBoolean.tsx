import { useState } from "react";

import { type UseBooleanHandlerType } from "./useBoolean.types";

const useBoolean: UseBooleanHandlerType<boolean> = (initialVal = false) => {
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
