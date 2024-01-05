import type { Meta, StoryObj } from "@storybook/react";

import { Checkbox } from "./Checkbox";

const meta = {
  title: "Data Input/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
} as Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  render: (args) => (
    <div className="flex items-center gap-4 p-8">
      <Checkbox {...args} />
    </div>
  ),
};

export const Colors: Story = {
  render: (args) => (
    <div className="flex flex-col justify-center gap-4 p-8">
      <div className="flex gap-4">
        <Checkbox color="primary" {...args} />
        <label>primary</label>
      </div>
      <div className="flex gap-4">
        <Checkbox color="secondary" {...args} />
        <label>secondary</label>
      </div>
      <div className="flex gap-4">
        <Checkbox color="accent" {...args} />
        <label>accent</label>
      </div>
      <div className="flex gap-4">
        <Checkbox color="success" {...args} />
        <label>success</label>
      </div>
      <div className="flex gap-4">
        <Checkbox color="warning" {...args} />
        <label>warning</label>
      </div>
      <div className="flex gap-4">
        <Checkbox color="error" {...args} />
        <label>error</label>
      </div>
      <div className="flex gap-4">
        <Checkbox color="info" {...args} />
        <label>info</label>
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <div className="flex flex-col justify-center gap-4 p-8">
      <div className="flex gap-4">
        <Checkbox size="xs" {...args} />
        <label>xs</label>
      </div>
      <div className="flex gap-4">
        <Checkbox size="sm" {...args} />
        <label>sm</label>
      </div>
      <div className="flex gap-4">
        <Checkbox size="md" {...args} />
        <label>md</label>
      </div>
      <div className="flex gap-4">
        <Checkbox size="lg" {...args} />
        <label>lg</label>
      </div>
    </div>
  ),
};
