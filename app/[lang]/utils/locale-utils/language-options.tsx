import Image from "next/image";
import { ReactElement } from "react";

import { Locale } from "./i18n-config";

export const languageOptions: {
  label: string;
  value: Locale;
  icon: ReactElement;
}[] = [
  {
    label: "english",
    value: "en",
    icon: (
      <Image
        width={20}
        height={20}
        alt="english"
        src="/images/icons/english-uk.svg"
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
        src="/images/icons/espanol-esp.svg"
      />
    ),
  },
];
