import * as React from "react";

import type { Preview } from "@storybook/react";

import { fonts } from "../app/_lib/fonts";

import "@/styles/globals.app.css";
import "~/styles/overrides/daisyui.css";

import { appThemes } from "~/utils/tailwind/theme";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <main className={`${fonts.primary.variable} ${fonts.secondary.variable}`}>
        <Story />
      </main>
    ),
  ],
};

export const globalTypes = {
  dataThemes: {
    defaultValue: {
      list: appThemes.map((theme) => ({
        name: theme,
        dataTheme: theme,
      })),
    },
  },
  dataTheme: {
    defaultValue: appThemes[0],
  },
};

export default preview;
