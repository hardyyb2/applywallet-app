import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: [
    "../app/**/*.stories.@(js|jsx|mjs|ts|tsx|mdx)",
    "../common/**/*.stories.@(js|jsx|mjs|ts|tsx|mdx)",
  ],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@storybook/addon-styling-webpack",
    "@storybook/addon-a11y",
    {
      name: "@storybook/addon-styling-webpack",

      options: {
        rules: [
          {
            test: /\.s(a|c)ss$/,
            sideEffects: true,
            use: [
              require.resolve("style-loader"),
              {
                loader: require.resolve("css-loader"),
                options: {
                  importLoaders: 1,
                },
              },
              {
                loader: require.resolve("postcss-loader"),
                options: {
                  implementation: require.resolve("postcss"),
                },
              },
              {
                loader: require.resolve("sass-loader"),
                options: {
                  implementation: require("sass"),
                },
              },
            ],
          },
        ],
      },
    },
    "storybook-addon-data-theme-switcher",
    "@chromatic-com/storybook",
  ],

  framework: {
    name: "@storybook/nextjs",
    options: {},
  },

  docs: {},

  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
};
export default config;
