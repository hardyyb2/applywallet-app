const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./mdx-components.tsx",
    // Note the addition of the `app` directory.
  ],
  theme: {
    fontFamily: {
      primary: ["var(--font-primary)", ...fontFamily.sans],
      secondary: ["var(--font-secondary)", ...fontFamily.sans],
    },
    fontSize: {
      h1: "clamp(2.80rem, calc(2.44rem + 1.78vw), 4.58rem)",
      h2: "clamp(2.33rem, calc(2.07rem + 1.33vw), 3.66rem)",
      h3: "clamp(1.94rem, calc(1.75rem + 0.99vw), 2.93rem)",
      h4: "clamp(1.62rem, calc(1.48rem + 0.72vw), 2.34rem)",
      h5: "clamp(1.35rem, calc(1.25rem + 0.53vw), 1.88rem)",
      h6: "1.25rem",
      body1: "clamp(1.13rem, calc(1.05rem + 0.38vw), 1.5rem)",
      body2: "clamp(0.94rem, calc(0.89rem + 0.26vw), 1.2rem)",
      subtitle1: "1.125rem",
      subtitle2: "0.875rem",
      caption: "clamp(0.78rem, calc(0.75rem + 0.18vw), 0.96rem)",
    },

    extend: {
      screens: {
        "3xl": "1920px",
        "4xl": "2560px",
        "5xl": "3840px",
      },

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

      typography: {
        DEFAULT: {
          css: {
            maxWidth: "80ch",
          },
        },
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
