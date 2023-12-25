import type { Meta, StoryObj } from "@storybook/react";

import { Skeleton } from "./Skeleton";

const meta = {
  title: "Feedback/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
} as Meta<typeof Skeleton>;

export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  args: {
    className: "w-32 h-32",
  },
  render: (args) => {
    return <Skeleton {...args} />;
  },
};

export const CardExample: Story = {
  render: () => {
    return (
      <div className="flex w-52 flex-col gap-4">
        <Skeleton className="h-32 w-full"></Skeleton>
        <Skeleton className="h-4 w-28"></Skeleton>
        <Skeleton className="h-4 w-full"></Skeleton>
        <Skeleton className="h-4 w-full"></Skeleton>
      </div>
    );
  },
};
