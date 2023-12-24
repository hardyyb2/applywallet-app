import plugin from "tailwindcss/plugin";

const typographyComponentsPlugin = plugin(({ addComponents, theme }) => {
  addComponents({
    ".display-l": {
      fontSize: "57pt", // 76px
      fontWeight: "400",
      fontStyle: "normal",
      lineHeight: "64pt", // 85px
      letterSpacing: "-0.25pt",
      fontFamily: theme("fontFamily.primary"),
    },

    ".display-m": {
      fontSize: "45pt", // 60px
      fontWeight: "400",
      fontStyle: "normal",
      lineHeight: "52pt", // 69px
      letterSpacing: "0px",
      fontFamily: theme("fontFamily.primary"),
    },

    ".display-s": {
      fontSize: "36pt", // 48px
      fontWeight: "400",
      fontStyle: "normal",
      lineHeight: "44pt", // 59px
      fontFamily: theme("fontFamily.primary"),
    },

    ".headline-l": {
      fontSize: "32pt", // 42px
      fontWeight: "400",
      fontStyle: "normal",
      lineHeight: "40pt", // 53px
      letterSpacing: "0",
      fontFamily: theme("fontFamily.primary"),
    },

    ".headline-m": {
      fontSize: "28pt", // 37px
      fontWeight: "400",
      fontStyle: "normal",
      lineHeight: "36pt", // 48px
      letterSpacing: "0",
      fontFamily: theme("fontFamily.primary"),
    },

    ".headline-s": {
      fontSize: "24pt", // 32px
      fontWeight: "400",
      fontStyle: "normal",
      lineHeight: "32pt", // 43px
      letterSpacing: "0",
      fontFamily: theme("fontFamily.primary"),
    },

    ".title-l": {
      fontSize: "22pt", // 29px
      fontWeight: "400",
      fontStyle: "normal",
      lineHeight: "28pt", // 37px
      fontFamily: theme("fontFamily.secondary"),
    },

    ".title-m": {
      fontSize: "16pt", // 21px
      fontWeight: "500",
      fontStyle: "normal",
      lineHeight: "24pt", // 32px
      letterSpacing: "0.15pt",
      fontFamily: theme("fontFamily.secondary"),
    },

    ".title-s": {
      fontSize: "14pt", // 18px
      fontWeight: "500",
      fontStyle: "normal",
      lineHeight: "20pt", // 27px
      letterSpacing: "0.1pt",
      fontFamily: theme("fontFamily.secondary"),
    },

    ".body-l": {
      fontSize: "16pt", // 21px
      fontWeight: "400",
      fontStyle: "normal",
      lineHeight: "24pt", // 32px
      letterSpacing: "0.5pt",
      fontFamily: theme("fontFamily.secondary"),
    },

    ".body-m": {
      fontSize: "14pt", // 18px
      fontWeight: "400",
      fontStyle: "normal",
      lineHeight: "20pt", // 27px
      letterSpacing: "0.25pt",
      fontFamily: theme("fontFamily.secondary"),
    },

    ".body-s": {
      fontSize: "12pt", // 16px
      fontWeight: "400",
      fontStyle: "normal",
      lineHeight: "16pt", // 21px
      letterSpacing: "0.4pt",
      fontFamily: theme("fontFamily.secondary"),
    },

    ".label-l": {
      fontSize: "14pt", // 18px
      fontWeight: "500",
      fontStyle: "normal",
      lineHeight: "20pt", // 27px
      letterSpacing: "0.1pt",
      fontFamily: theme("fontFamily.secondary"),
    },

    ".label-l-bold": {
      fontSize: "14pt", // 18px
      fontWeight: "700",
      fontStyle: "normal",
      lineHeight: "20pt", // 27px
      letterSpacing: "0.1pt",
      fontFamily: theme("fontFamily.secondary"),
    },

    ".label-m": {
      fontSize: "12pt", // 16px
      fontWeight: "500",
      fontStyle: "normal",
      lineHeight: "16pt", // 21px
      letterSpacing: "0.5pt",
      fontFamily: theme("fontFamily.secondary"),
    },

    ".label-m-bold": {
      fontSize: "12pt", // 16px
      fontWeight: "700",
      fontStyle: "normal",
      lineHeight: "16pt", // 21px
      letterSpacing: "0.5pt",
      fontFamily: theme("fontFamily.secondary"),
    },

    ".label-s": {
      fontSize: "11pt", // 14px
      fontWeight: "500",
      fontStyle: "normal",
      lineHeight: "16pt", // 21px
      letterSpacing: "0.5pt",
      fontFamily: theme("fontFamily.secondary"),
    },

    ".caption-m": {
      fontSize: "9pt", // 12px
      fontWeight: "400",
      fontStyle: "normal",
      lineHeight: "12pt", // 16px
      letterSpacing: "0.4pt",
      fontFamily: theme("fontFamily.secondary"),
    },
  });
});

export { typographyComponentsPlugin };
