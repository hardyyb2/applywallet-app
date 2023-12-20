import { tailwindConfig } from "@/utils/tailwind";

const breakpoints = tailwindConfig.theme.screens;
type BreakPointKeyType = keyof typeof breakpoints;

export type { BreakPointKeyType };
export { breakpoints };
