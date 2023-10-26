import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

type CnOptions = {
  merge?: boolean;
};

const createCn = (options?: CnOptions) => {
  return (...inputs: ClassValue[]) => {
    if (options?.merge) {
      return twMerge(clsx(...inputs));
    }
    return clsx(...inputs);
  };
};

const cn = createCn();
const cnMerge = createCn({ merge: true });

export { cn, cnMerge };
