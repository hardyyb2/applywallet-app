import type { Meta, StoryObj } from "@storybook/react";

import { Toggle } from "./Toggle";

const meta = {
  component: Toggle,
  tags: ["autodocs"],
} satisfies Meta<typeof Toggle>;

export default meta;

type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  args: {
    variant: "default",
    children: "Default",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline",
  },
};
