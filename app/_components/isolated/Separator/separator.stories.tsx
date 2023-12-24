import type { Meta, StoryObj } from "@storybook/react";

import { Separator, type SeparatorProps } from "./Separator";

const meta = {
  component: Separator,
  tags: ["autodocs"],
} as Meta<typeof Separator>;

export default meta;

type Story = StoryObj<typeof Separator>;

export const Veritcal: Story = {
  render: (args: SeparatorProps) => {
    return (
      <div className="w-max rounded-xl border border-base-content p-4">
        <div>on top of separator</div>
        <Separator {...args} />
        <div>below separator</div>
      </div>
    );
  },
};

export const Horizontal: Story = {
  render: (args: SeparatorProps) => {
    return (
      <div className="flex h-max w-max gap-3xs rounded-xl border border-base-content p-4">
        <div>above separator</div>
        <Separator orientation="horizontal" {...args} />
        <div>below separator</div>
      </div>
    );
  },
};

export const WithChildren: Story = {
  render: (args: SeparatorProps) => {
    return (
      <div className="flex h-max w-max flex-col gap-3xs rounded-xl border border-base-content p-4">
        <div>above separator</div>
        <Separator {...args}>or</Separator>
        <div>below separator</div>
      </div>
    );
  },
};
