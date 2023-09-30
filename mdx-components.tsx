import { Typography } from "@/_components/ui/isolated/common/Typography/Typography";
import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    Typography,
  };
}
