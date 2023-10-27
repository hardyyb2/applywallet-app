import tailwindConfig from "tailwind.config";
import resolveConfig from "tailwindcss/resolveConfig";

const fullConfig = resolveConfig(tailwindConfig);

export { fullConfig as tailwindConfig };
