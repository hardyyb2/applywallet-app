import tailwindConfig from "tailwind.config.js";
import resolveConfig from "tailwindcss/resolveConfig";

const fullConfig = resolveConfig(tailwindConfig);

export { fullConfig as tailwindConfig };
