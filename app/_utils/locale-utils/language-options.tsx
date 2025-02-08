import { type ReactElement } from "react";
import Image from "next/image";

import EnglishFlagImg from "public/images/flags/english-uk.svg";
import SpanishFlagImg from "public/images/flags/espanol-esp.svg";

import { type Locale } from "./i18n-config";

export const languageOptions: {
  label: string;
  value: Locale;
  icon: ReactElement<any>;
}[] = [
  {
    label: "english",
    value: "en",
    icon: (
      <Image
        width={20}
        height={20}
        alt="english"
        src={EnglishFlagImg}
        placeholder="blur"
        blurDataURL={EnglishFlagImg.blurDataURL}
      />
    ),
  },
  {
    label: "spanish",
    value: "es",
    icon: (
      <Image
        width={20}
        height={20}
        alt="english"
        src={SpanishFlagImg}
        placeholder="blur"
        blurDataURL={SpanishFlagImg.blurDataURL}
      />
    ),
  },
];
