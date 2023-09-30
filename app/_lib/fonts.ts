import { Open_Sans, Raleway } from "next/font/google";

const primary = Raleway({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-primary",
});

const secondary = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-secondary",
});

export const fonts = { primary, secondary };
