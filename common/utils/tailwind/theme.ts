/* Find active themes in `global.app.css` */
const appThemes: string[] = ["light", "synthwave"];

type ThemeColors = {
  primary: string;
  primaryContent: string;
  secondary: string;
  secondaryContent: string;
  accent: string;
  accentContent: string;
  neutral: string;
  neutralContent: string;
  base100: string;
  base200: string;
  base300: string;
  baseContent: string;
  info: string;
  infoContent: string;
  success: string;
  successContent: string;
  warning: string;
  warningContent: string;
  error: string;
  errorContent: string;
};

function extractThemeColorsFromDOM(): ThemeColors {
  const computedStyles = getComputedStyle(document.querySelector(":root")!);

  return {
    primary: computedStyles.getPropertyValue("--color-primary"),
    primaryContent: computedStyles.getPropertyValue("--color-primary-content"),
    secondary: computedStyles.getPropertyValue("--color-secondary"),
    secondaryContent: computedStyles.getPropertyValue(
      "--color-secondary-content",
    ),
    accent: computedStyles.getPropertyValue("--color-accent"),
    accentContent: computedStyles.getPropertyValue("--color-accent-content"),
    neutral: computedStyles.getPropertyValue("--color-neutral"),
    neutralContent: computedStyles.getPropertyValue("--color-neutral-content"),
    base100: computedStyles.getPropertyValue("--color-base-100"),
    base200: computedStyles.getPropertyValue("--color-base-200"),
    base300: computedStyles.getPropertyValue("--color-base-300"),
    baseContent: computedStyles.getPropertyValue("--color-base-content"),
    info: computedStyles.getPropertyValue("--color-info"),
    infoContent: computedStyles.getPropertyValue("--color-info-content"),
    success: computedStyles.getPropertyValue("--color-success"),
    successContent: computedStyles.getPropertyValue("--color-success-content"),
    warning: computedStyles.getPropertyValue("--color-warning"),
    warningContent: computedStyles.getPropertyValue("--color-warning-content"),
    error: computedStyles.getPropertyValue("--color-error"),
    errorContent: computedStyles.getPropertyValue("--color-error-content"),
  };
}

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

export {
  appThemes,
  breakpoints,
  extractThemeColorsFromDOM,
  type ThemeColors,
  type BreakPointKeyType,
};
