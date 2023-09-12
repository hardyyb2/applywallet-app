/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
  ],
  theme: {
    extend: {
      spacing: {
        "3xs": "clamp(0.31rem, calc(0.30rem + 0.06vw), 0.38rem)",
        "2xs": "clamp(0.56rem, calc(0.53rem + 0.19vw), 0.75rem)",
        xs: "clamp(0.88rem, calc(0.83rem + 0.25vw), 1.13rem)",
        s: "clamp(1.13rem, calc(1.05rem + 0.38vw), 1.50rem)",
        m: "clamp(1.69rem, calc(1.58rem + 0.56vw), 2.25rem)",
        l: "clamp(2.25rem, calc(2.10rem + 0.75vw), 3.00rem)",
        xl: "clamp(3.38rem, calc(3.15rem + 1.13vw), 4.50rem)",
        "2xl": "clamp(4.50rem, calc(4.20rem + 1.50vw), 6.00rem)",
        "3xl": "clamp(6.75rem, calc(6.30rem + 2.25vw), 9.00rem)",

        /* One-up pairs */
        "3xs-2xs": "clamp(0.31rem, calc(0.23rem + 0.44vw), 0.75rem)",
        "2xs-xs": "clamp(0.56rem, calc(0.45rem + 0.56vw), 1.13rem)",
        "xs-s": "clamp(0.88rem, calc(0.75rem + 0.63vw), 1.50rem)",
        "s-m": "clamp(1.13rem, calc(0.90rem + 1.13vw), 2.25rem)",
        "m-l": "clamp(1.69rem, calc(1.43rem + 1.31vw), 3.00rem)",
        "l-xl": "clamp(2.25rem, calc(1.80rem + 2.25vw), 4.50rem)",
        "xl-2xl": "clamp(3.38rem, calc(2.85rem + 2.63vw), 6.00rem)",
        "2xl-3xl": "clamp(4.50rem, calc(3.60rem + 4.50vw), 9.00rem)",
      },
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
  daisyui: {
    themes: ["night", "light", "synthwave"],
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
};
