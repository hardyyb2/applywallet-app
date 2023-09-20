import { Open_Sans, Raleway } from "next/font/google";

const primary = Raleway({
  subsets: ["latin"],
  display: "swap",
});

const secondary = Open_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const fonts = { primary, secondary };
