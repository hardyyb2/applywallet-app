/* Find active themes in `global.app.css` */
const appThemes: string[] = ["light", "synthwave"];

/** Find active breakpoints in `global.app.css` */
const breakpoints = {
  xs: 480,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1440,
  "3xl": 1920,
  "4xl": 2560,
} as const;
type BreakPointKeyType = keyof typeof breakpoints;

export { appThemes, breakpoints, type BreakPointKeyType };
