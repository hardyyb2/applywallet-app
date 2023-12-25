import type { Meta, StoryObj } from "@storybook/react";

import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./Tooltip";

const meta = {
  title: "Feedback/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
} as Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  render: () => {
    return (
      <div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>show tooltip</TooltipTrigger>
            <TooltipContent>this is tooltip</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    );
  },
};

export const Colors: Story = {
  render: () => {
    return (
      <div className="flex flex-col items-center gap-8">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>primary tooltip</TooltipTrigger>
            <TooltipContent color="primary">this is tooltip</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>secondary tooltip</TooltipTrigger>
            <TooltipContent color="secondary">this is tooltip</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>accent tooltip</TooltipTrigger>
            <TooltipContent color="accent">this is tooltip</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>success tooltip</TooltipTrigger>
            <TooltipContent color="success">this is tooltip</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>warning tooltip</TooltipTrigger>
            <TooltipContent color="warning">this is tooltip</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>error tooltip</TooltipTrigger>
            <TooltipContent color="error">this is tooltip</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>info tooltip</TooltipTrigger>
            <TooltipContent color="info">this is tooltip</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    );
  },
};

export const WithArrow: Story = {
  render: () => {
    return (
      <div className="flex flex-col items-center gap-8">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>primary tooltip</TooltipTrigger>
            <TooltipContent color="primary">
              this is tooltip
              <TooltipArrow color="primary" />
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    );
  },
};
