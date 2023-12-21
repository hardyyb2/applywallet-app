import type { Meta, StoryObj } from "@storybook/react";

import { Typography } from "./Typography";
import { TypographyVariantTypeTagMap } from "./typography.utils";

const meta = {
  component: Typography,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: Object.keys(TypographyVariantTypeTagMap),
      control: {
        type: "select",
      },
    },
  },
} satisfies Meta<typeof Typography>;

export default meta;

type Story = StoryObj<typeof Typography>;

export const DisplayL: Story = {
  name: "display-l",
  args: {
    children:
      "A quick brown fox jumps over the lazy dog and he kept on jumping because he was crazy (display-l)",
    variant: "display-l",
  },
};

export const DisplayM: Story = {
  name: "display-m",
  args: {
    children:
      "A quick brown fox jumps over the lazy dog and he kept on jumping because he was crazy (display-m)",
    variant: "display-m",
  },
};

export const DisplayS: Story = {
  name: "display-s",
  args: {
    children:
      "A quick brown fox jumps over the lazy dog and he kept on jumping because he was crazy (display-s)",
    variant: "display-s",
  },
};

export const HeadlineL: Story = {
  name: "headline-l",
  args: {
    children:
      "A quick brown fox jumps over the lazy dog and he kept on jumping because he was crazy (headline-l)",
    variant: "headline-l",
  },
};

export const HeadlineM: Story = {
  name: "headline-m",
  args: {
    children:
      "A quick brown fox jumps over the lazy dog and he kept on jumping because he was crazy (headline-m)",
    variant: "headline-m",
  },
};

export const HeadlineS: Story = {
  name: "headline-s",
  args: {
    children:
      "A quick brown fox jumps over the lazy dog and he kept on jumping because he was crazy (headline-s)",
    variant: "headline-s",
  },
};

export const TitleL: Story = {
  name: "title-l",
  args: {
    children:
      "A quick brown fox jumps over the lazy dog and he kept on jumping because he was crazy (title-l)",
    variant: "title-l",
  },
};

export const TitleM: Story = {
  name: "title-m",
  args: {
    children:
      "A quick brown fox jumps over the lazy dog and he kept on jumping because he was crazy (title-m)",
    variant: "title-m",
  },
};

export const TitleS: Story = {
  name: "title-s",
  args: {
    children:
      "A quick brown fox jumps over the lazy dog and he kept on jumping because he was crazy (title-s)",
    variant: "title-s",
  },
};

export const BodyL: Story = {
  name: "body-l",
  args: {
    children:
      "A quick brown fox jumps over the lazy dog and he kept on jumping because he was crazy (body-l)",
    variant: "body-l",
  },
};

export const BodyM: Story = {
  name: "body-m",
  args: {
    children:
      "A quick brown fox jumps over the lazy dog and he kept on jumping because he was crazy (body-m)",
    variant: "body-m",
  },
};

export const BodyS: Story = {
  name: "body-s",
  args: {
    children:
      "A quick brown fox jumps over the lazy dog and he kept on jumping because he was crazy (body-s)",
    variant: "body-s",
  },
};

export const LabelL: Story = {
  name: "label-l",
  args: {
    children:
      "A quick brown fox jumps over the lazy dog and he kept on jumping because he was crazy (label-l)",
    variant: "label-l",
  },
};

export const LabelLBold: Story = {
  name: "label-l-bold",
  args: {
    children:
      "A quick brown fox jumps over the lazy dog and he kept on jumping because he was crazy (label-l-bold)",
    variant: "label-l-bold",
  },
};

export const LabelM: Story = {
  name: "label-m",
  args: {
    children:
      "A quick brown fox jumps over the lazy dog and he kept on jumping because he was crazy (label-m)",
    variant: "label-m",
  },
};

export const LabelMBold: Story = {
  name: "label-m-bold",
  args: {
    children:
      "A quick brown fox jumps over the lazy dog and he kept on jumping because he was crazy (label-m-bold)",
    variant: "label-m-bold",
  },
};

export const LabelS: Story = {
  name: "label-s",
  args: {
    children:
      "A quick brown fox jumps over the lazy dog and he kept on jumping because he was crazy (label-s)",
    variant: "label-s",
  },
};

export const SrOnly: Story = {
  name: "sr-only",
  args: {
    children:
      "A quick brown fox jumps over the lazy dog and he kept on jumping because he was crazy (sr-only)",
    variant: "sr-only",
  },
};
