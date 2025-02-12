import type { Config } from "tailwindcss";

import { typographyComponentsPlugin } from "./common/utils/tailwind/plugins";

const config: Config = {
  // TODO - check how multiple configs can work without whole app content being included
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./common/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {},
  plugins: [require("tailwindcss-animate"), typographyComponentsPlugin],
  future: {
    hoverOnlyWhenSupported: true,
  },
};

export default config;
