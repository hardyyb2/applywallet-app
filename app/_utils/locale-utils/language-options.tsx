import { type ReactElement } from "react";
import Image from "next/image";

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
        src="/images/flags/english-uk.svg"
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
        src="/images/flags/espanol-esp.svg"
      />
    ),
  },
];
