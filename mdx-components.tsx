import { cn } from "@/_utils/styles.utils";
import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: ({ className, ...props }) => (
      <h1
        className={cn(
          "!text-4xl !mt-2 !scroll-m-20 !font-bold !tracking-tight",
          className,
        )}
        {...props}
      />
    ),
  };
}
