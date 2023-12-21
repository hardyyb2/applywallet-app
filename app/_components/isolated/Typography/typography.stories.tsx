import type { Meta, StoryObj } from "@storybook/react";

import { Typography } from "./Typography";

const meta = {
  component: Typography,
} satisfies Meta<typeof Typography>;

export default meta;

type Story = StoryObj<typeof Typography>;

export const DisplayL: Story = {
  name: "display-l",
  args: {
    children: "A quick brown fox jumps over the lazy dog (display-l)",
    variant: "display-l",
  },
};

export const DisplayM: Story = {
  name: "display-m",
  args: {
    children: "A quick brown fox jumps over the lazy dog (display-m)",
    variant: "display-m",
  },
};

export const DisplayS: Story = {
  name: "display-s",
  args: {
    children: "A quick brown fox jumps over the lazy dog (display-s)",
    variant: "display-s",
  },
};

export const HeadlineL: Story = {
  name: "headline-l",
  args: {
    children: "A quick brown fox jumps over the lazy dog (headline-l)",
    variant: "headline-l",
  },
};

export const HeadlineM: Story = {
  name: "headline-m",
  args: {
    children: "A quick brown fox jumps over the lazy dog (headline-m)",
    variant: "headline-m",
  },
};

export const HeadlineS: Story = {
  name: "headline-s",
  args: {
    children: "A quick brown fox jumps over the lazy dog (headline-s)",
    variant: "headline-s",
  },
};

export const BodyL: Story = {
  name: "body-l",
  args: {
    children: "A quick brown fox jumps over the lazy dog (body-l)",
    variant: "body-l",
  },
};

export const BodyM: Story = {
  name: "body-m",
  args: {
    children: "A quick brown fox jumps over the lazy dog (body-m)",
    variant: "body-m",
  },
};

export const BodyS: Story = {
  name: "body-s",
  args: {
    children: "A quick brown fox jumps over the lazy dog (body-s)",
    variant: "body-s",
  },
};

export const LabelL: Story = {
  name: "label-l",
  args: {
    children: "A quick brown fox jumps over the lazy dog (label-l)",
    variant: "label-l",
  },
};

export const LabelLBold: Story = {
  name: "label-l-bold",
  args: {
    children: "A quick brown fox jumps over the lazy dog (label-l-bold)",
    variant: "label-l-bold",
  },
};

export const LabelM: Story = {
  name: "label-m",
  args: {
    children: "A quick brown fox jumps over the lazy dog (label-m)",
    variant: "label-m",
  },
};

export const LabelMBold: Story = {
  name: "label-m-bold",
  args: {
    children: "A quick brown fox jumps over the lazy dog (label-m-bold)",
    variant: "label-m-bold",
  },
};

export const LabelS: Story = {
  name: "label-s",
  args: {
    children: "A quick brown fox jumps over the lazy dog (label-s)",
    variant: "label-s",
  },
};

export const SrOnly: Story = {
  name: "sr-only",
  args: {
    children: "A quick brown fox jumps over the lazy dog (sr-only)",
    variant: "srOnly",
  },
};
