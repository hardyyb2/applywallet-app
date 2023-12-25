import type { Meta, StoryObj } from "@storybook/react";

import { Button, type ButtonProps } from "./Button";

const meta = {
  title: "Actions/Button",
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render(args: ButtonProps) {
    return (
      <div className="flex w-max flex-col gap-4">
        <Button {...args}> default </Button>
        <Button {...args} variant="outline">
          default outline
        </Button>
      </div>
    );
  },
};

export const Primary: Story = {
  args: {
    color: "primary",
  },
  render: (args: ButtonProps) => {
    return (
      <div className="flex w-max flex-col gap-4">
        <Button {...args}>Primary</Button>
        <Button {...args} variant="outline">
          Primary outline
        </Button>
      </div>
    );
  },
};

export const Secondary: Story = {
  args: {
    color: "secondary",
  },
  render: (args: ButtonProps) => {
    return (
      <div className="flex w-max flex-col gap-4">
        <Button {...args}>Secondary</Button>
        <Button {...args} variant="outline">
          Secondary outline
        </Button>
      </div>
    );
  },
};

export const Accent: Story = {
  args: {
    color: "accent",
  },
  render: (args: ButtonProps) => {
    return (
      <div className="flex w-max flex-col gap-4">
        <Button {...args}>Accent</Button>
        <Button {...args} variant="outline">
          Accent outline
        </Button>
      </div>
    );
  },
};

export const Info: Story = {
  args: {
    color: "info",
  },
  render: (args: ButtonProps) => {
    return (
      <div className="flex w-max flex-col gap-4">
        <Button {...args}>Info</Button>
        <Button {...args} variant="outline">
          Info outline
        </Button>
      </div>
    );
  },
};

export const Warning: Story = {
  args: {
    color: "warning",
  },
  render: (args: ButtonProps) => {
    return (
      <div className="flex w-max flex-col gap-4">
        <Button {...args}>Warning</Button>
        <Button {...args} variant="outline">
          Warning outline
        </Button>
      </div>
    );
  },
};

export const Success: Story = {
  args: {
    color: "success",
  },
  render: (args: ButtonProps) => {
    return (
      <div className="flex w-max flex-col gap-4">
        <Button {...args}>Success</Button>
        <Button {...args} variant="outline">
          Success outline
        </Button>
      </div>
    );
  },
};

export const Ghost: Story = {
  args: {
    color: "ghost",
  },
  render: (args: ButtonProps) => {
    return (
      <div className="flex w-max flex-col gap-4">
        <Button {...args}>Ghost</Button>
        <Button {...args} variant="outline">
          Ghost outline
        </Button>
      </div>
    );
  },
};

export const Neutral: Story = {
  args: {
    color: "neutral",
  },
  render: (args: ButtonProps) => {
    return (
      <div className="flex w-max flex-col gap-4">
        <Button {...args}>Neutral</Button>
        <Button {...args} variant="outline">
          Neutral outline
        </Button>
      </div>
    );
  },
};

export const Error: Story = {
  args: {
    color: "error",
  },
  render: (args: ButtonProps) => {
    return (
      <div className="flex w-max flex-col gap-4">
        <Button {...args}>Error</Button>
        <Button {...args} variant="outline">
          Error outline
        </Button>
      </div>
    );
  },
};

export const Wide: Story = {
  args: {
    color: "primary",
    wide: true,
    children: "Wide",
  },
};

export const Responsive: Story = {
  args: {
    color: "primary",
    responsive: true,
    children: "Responsive (resize window to see effect)",
  },
};

export const FullWidth: Story = {
  args: {
    color: "primary",
    fullWidth: true,
    children: "FullWidth",
  },
};

export const NoAnimation: Story = {
  args: {
    color: "primary",
    animation: false,
    children: "No Animation",
  },
};

export const Variants: Story = {
  args: {
    color: "primary",
  },
  render: (args: ButtonProps) => {
    return (
      <div className="flex items-center gap-4">
        <Button {...args} variant="outline">
          Outline
        </Button>
        <Button {...args} variant="link">
          Link
        </Button>
      </div>
    );
  },
};

export const Shapes: Story = {
  args: {
    color: "primary",
  },
  render: (args: ButtonProps) => {
    return (
      <div className="flex items-center gap-4">
        <Button {...args} shape="square">
          S
        </Button>
        <Button {...args} shape="circle">
          C
        </Button>
      </div>
    );
  },
};

export const Sizes: Story = {
  args: {
    color: "primary",
  },
  render: (args: ButtonProps) => {
    return (
      <div className="flex items-center gap-4">
        <Button {...args} size="xs">
          xs button
        </Button>
        <Button {...args} size="sm">
          sm button
        </Button>
        <Button {...args} size="md">
          md button
        </Button>
        <Button {...args} size="lg">
          lg button
        </Button>
      </div>
    );
  },
};
