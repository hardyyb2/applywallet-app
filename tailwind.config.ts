import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

const config = {
  // TODO - check how multiple configs can work without whole app content being included
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
      "3xl": "1920px",
      "4xl": "2560px",
      "5xl": "3840px",
    },

    fontFamily: {
      primary: ["var(--font-primary)", ...fontFamily.sans],
      secondary: ["var(--font-secondary)", ...fontFamily.sans],
    },

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

      typography: {
        DEFAULT: {
          css: {
            maxWidth: "80ch",
          },
        },
      },

      flex: {
        0: "0 0 auto",
      },

      /* animations */
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui"),
    require("tailwindcss-animate"),
    plugin(({ addComponents, theme }) => {
      addComponents({
        ".display-l": {
          fontSize: "57pt", // 76px
          fontWeight: "400",
          fontStyle: "normal",
          lineHeight: "1.2", // 85px
          letterSpacing: "-0.25pt",
          fontFamily: theme("fontFamily.primary"),
        },

        ".display-m": {
          fontSize: "45pt", // 60px
          fontWeight: "400",
          fontStyle: "normal",
          lineHeight: "1.2", // 69px
          letterSpacing: "0px",
          fontFamily: theme("fontFamily.primary"),
        },

        ".display-s": {
          fontSize: "36pt", // 48px
          fontWeight: "400",
          fontStyle: "normal",
          lineHeight: "1.2", // 59px
          fontFamily: theme("fontFamily.primary"),
        },

        ".headline-l": {
          fontSize: "32pt", // 42px
          fontWeight: "400",
          fontStyle: "normal",
          lineHeight: "1.2", // 53px
          letterSpacing: "0",
          fontFamily: theme("fontFamily.primary"),
        },

        ".headline-m": {
          fontSize: "28pt", // 37px
          fontWeight: "400",
          fontStyle: "normal",
          lineHeight: "1.2", // 48px
          letterSpacing: "0",
          fontFamily: theme("fontFamily.primary"),
        },

        ".headline-s": {
          fontSize: "24pt", // 32px
          fontWeight: "400",
          fontStyle: "normal",
          lineHeight: "1.2", // 43px
          letterSpacing: "0",
          fontFamily: theme("fontFamily.primary"),
        },

        ".title-l": {
          fontSize: "22pt", // 29px
          fontWeight: "400",
          fontStyle: "normal",
          lineHeight: "1.2", // 37px
          fontFamily: theme("fontFamily.secondary"),
        },

        ".title-m": {
          fontSize: "16pt", // 21px
          fontWeight: "500",
          fontStyle: "normal",
          lineHeight: "1.2", // 32px
          letterSpacing: "0.15pt",
          fontFamily: theme("fontFamily.secondary"),
        },

        ".title-s": {
          fontSize: "clamp(1rem, 0.42vw + 0.92rem, 1.25rem)", // 16px - 20px
          fontWeight: "500",
          fontStyle: "normal",
          lineHeight: "1.2", // 27px
          letterSpacing: "0.1pt",
          fontFamily: theme("fontFamily.secondary"),
        },

        ".body-l": {
          fontSize: "16pt", // 21px
          fontWeight: "400",
          fontStyle: "normal",
          lineHeight: "1.5", // 32px
          letterSpacing: "0.5pt",
          fontFamily: theme("fontFamily.secondary"),
        },

        ".body-m": {
          fontSize: "clamp(1rem, 0.42vw + 0.92rem, 1.25rem)", // 16px - 20px
          fontWeight: "400",
          fontStyle: "normal",
          lineHeight: "1.5", // 27px
          letterSpacing: "0.25pt",
          fontFamily: theme("fontFamily.secondary"),
        },

        ".body-s": {
          fontSize: "12pt", // 16px
          fontWeight: "400",
          fontStyle: "normal",
          lineHeight: "1.5", // 21px
          letterSpacing: "0.4pt",
          fontFamily: theme("fontFamily.secondary"),
        },

        ".label-l": {
          fontSize: "clamp(1rem, 0.42vw + 0.92rem, 1.25rem)", // 16px - 20px
          fontWeight: "500",
          fontStyle: "normal",
          lineHeight: "1.5", // 27px
          letterSpacing: "0.1pt",
          fontFamily: theme("fontFamily.secondary"),
        },

        ".label-l-bold": {
          fontSize: "clamp(1rem, 0.42vw + 0.92rem, 1.25rem)", // 16px - 20px
          fontWeight: "700",
          fontStyle: "normal",
          lineHeight: "1.5", // 27px
          letterSpacing: "0.1pt",
          fontFamily: theme("fontFamily.secondary"),
        },

        ".label-m": {
          fontSize: "12pt", // 16px
          fontWeight: "500",
          fontStyle: "normal",
          lineHeight: "1.5", // 21px
          letterSpacing: "0.5pt",
          fontFamily: theme("fontFamily.secondary"),
        },

        ".label-m-bold": {
          fontSize: "12pt", // 16px
          fontWeight: "700",
          fontStyle: "normal",
          lineHeight: "1.5", // 21px
          letterSpacing: "0.5pt",
          fontFamily: theme("fontFamily.secondary"),
        },

        ".label-s": {
          fontSize: "11pt", // 14px
          fontWeight: "500",
          fontStyle: "normal",
          lineHeight: "1.5", // 21px
          letterSpacing: "0.5pt",
          fontFamily: theme("fontFamily.secondary"),
        },
      });
    }),
  ],
  daisyui: {
    themes: ["night", "light", "synthwave"],
    logs: false,
    prefix: "dui-",
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
};

export default config;
