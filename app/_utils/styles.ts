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
/** merge conflicting tailwind classes */
const cnM = createCn({ merge: true });

export { cn, cnM };
