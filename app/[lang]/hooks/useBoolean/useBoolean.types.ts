import { Dispatch, SetStateAction } from "react";

export type UseBooleanHandlerType<T> = (props: T) => [
  value: boolean,
  updaters: {
    toggle: () => void;
    reset: () => void;
    setValue: Dispatch<SetStateAction<boolean>>;
  },
];

console.log("[RENDER] hooks/useBoolean/useBoolean.types.ts");