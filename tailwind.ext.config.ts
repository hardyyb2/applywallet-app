import type { Config } from "tailwindcss";

import TailwindConfigRoot from "./tailwind.config";

const config: Config = {
  presets: [TailwindConfigRoot],
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
};

export default config;
