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
    fontSize: {
      h1: "clamp(2.7994rem, 2.5963rem + 1.0156vw, 3.815rem)", // 44.79px - 61.04px
      h2: "clamp(2.3325rem, 2.1886rem + 0.7194vw, 3.0519rem)", // 37.32px - 49.03px
      h3: "clamp(1.9438rem, 1.8443rem + 0.4975vw, 2.4413rem)", // 31.10px - 39.06px
      h4: "clamp(1.62rem, 1.5534rem + 0.3331vw, 1.9531rem)", // 25.92px - 31.25px
      h5: "clamp(1.35rem, 1.3075rem + 0.2125vw, 1.5625rem)", // 21.60px - 25.00px
      h6: "clamp(1.125rem, 1.1rem + 0.125vw, 1.25rem)", // 18.00px - 20.00px
      body1: "clamp(0.9375rem, 0.925rem + 0.0625vw, 1rem)", // 15.00px - 16.00px
      body2: "clamp(0.7813rem, 0.7775rem + 0.0188vw, 0.8rem)", // 12.50px - 12.80px
      subtitle1: "1.125rem", // 18.00px
      subtitle2: "0.875rem", // 14.00px
      caption: "clamp(0.78rem, calc(0.75rem + 0.18vw), 0.96rem)", // 12.48px - 15.36px
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
    plugin(({ addComponents }) => {
      addComponents({
        ".display-l": {
          fontSize: "57px",
          fontWeight: "400",
          fontStyle: "normal",
          lineHeight: "64px",
          letterSpacing: "-0.25px",
        },

        ".display-m": {
          fontSize: "45px",
          fontWeight: "400",
          fontStyle: "normal",
          lineHeight: "52px",
          letterSpacing: "0",
        },

        ".display-s": {
          fontSize: "36px",
          fontWeight: "400",
          fontStyle: "normal",
          lineHeight: "44px",
          letterSpacing: "0",
        },

        ".headline-l": {
          fontSize: "32px",
          fontWeight: "400",
          fontStyle: "normal",
          lineHeight: "40px",
        },

        ".headline-m": {
          fontSize: "28px",
          fontWeight: "400",
          fontStyle: "normal",
          lineHeight: "36px",
        },

        ".headline-s": {
          fontSize: "24px",
          fontWeight: "400",
          fontStyle: "normal",
          lineHeight: "32px",
        },

        ".title-l": {
          fontSize: "22px",
          fontWeight: "400",
          fontStyle: "normal",
          lineHeight: "28px",
        },

        ".title-m": {
          fontSize: "16px",
          fontWeight: "500",
          fontStyle: "normal",
          lineHeight: "24px",
          letterSpacing: "0.15px",
        },

        ".title-s": {
          fontSize: "14px",
          fontWeight: "500",
          fontStyle: "normal",
          lineHeight: "20px",
          letterSpacing: "0.1px",
        },

        ".body-l": {
          fontSize: "16px",
          fontWeight: "400",
          fontStyle: "normal",
          lineHeight: "24px",
          letterSpacing: "0.5px",
        },

        ".body-m": {
          fontSize: "14px",
          fontWeight: "400",
          fontStyle: "normal",
          lineHeight: "20px",
          letterSpacing: "0.25px",
        },

        ".body-s": {
          fontSize: "12px",
          fontWeight: "400",
          fontStyle: "normal",
          lineHeight: "16px",
          letterSpacing: "0.4px",
        },

        ".label-l": {
          fontSize: "14px",
          fontWeight: "500",
          fontStyle: "normal",
          lineHeight: "20px",
          letterSpacing: "0.1px",
        },

        ".label-m": {
          fontSize: "12px",
          fontWeight: "500",
          fontStyle: "normal",
          lineHeight: "16px",
          letterSpacing: "0.5px",
        },

        ".label-s": {
          fontSize: "11px",
          fontWeight: "500",
          fontStyle: "normal",
          lineHeight: "16px",
          letterSpacing: "0.5px",
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
