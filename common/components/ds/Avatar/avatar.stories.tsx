import type { Meta, StoryObj } from "@storybook/react";

import { Avatar, AvatarFallback, AvatarImage } from "./Avatar";

const meta = {
  title: "Data Display/Skeleton",
  component: Avatar,
  tags: ["autodocs"],
} as Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Sizes: Story = {
  render: (args) => {
    const sizes = ["xs", "sm", "md", "lg", "xl"] as const;

    return (
      <div className="flex items-center gap-4">
        {sizes.map((size) => (
          <>
            <Avatar {...args} size={size} key={size}>
              <AvatarImage src="https://i.pravatar.cc/300" />
              <AvatarFallback>A</AvatarFallback>
            </Avatar>
            <span className="body-m">{size}</span>
          </>
        ))}
      </div>
    );
  },
};

export const Shapes: Story = {
  render: (args) => {
    const shapes = ["circle", "square"] as const;

    return (
      <div className="flex items-center gap-4">
        {shapes.map((shape) => (
          <>
            <Avatar {...args} shape={shape} key={shape}>
              <AvatarImage src="https://i.pravatar.cc/300" />
              <AvatarFallback>A</AvatarFallback>
            </Avatar>
            <span className="body-m">{shape}</span>
          </>
        ))}
      </div>
    );
  },
};

export const Colors: Story = {
  render: (args) => {
    const colors = ["primary", "secondary", "accent", "neutral"] as const;

    return (
      <div className="flex items-center gap-4">
        {colors.map((color) => (
          <>
            <Avatar {...args} color={color} key={color}>
              <AvatarImage src="https://i.pravatar.cc/300" />
              <AvatarFallback>A</AvatarFallback>
            </Avatar>
            <span className="body-m">{color}</span>
          </>
        ))}
      </div>
    );
  },
};

export const Borders: Story = {
  render: (args) => {
    const borders = [true, false] as const;

    return (
      <div className="flex items-center gap-8">
        {borders.map((border) => (
          <div
            className="flex flex-col items-center gap-4"
            key={String(border)}
          >
            <Avatar {...args} border={border}>
              <AvatarImage src="https://i.pravatar.cc/300" />
              <AvatarFallback>A</AvatarFallback>
            </Avatar>
            {border ? "bordered" : "unbordered"}
          </div>
        ))}
      </div>
    );
  },
};

export const WithFallback: Story = {
  render: (args) => {
    return (
      <div className="flex items-center gap-4">
        <Avatar {...args}>
          <AvatarImage src="http//i.pravatar.cc/" />
          <AvatarFallback>A</AvatarFallback>
        </Avatar>
        <span className="body-m">
          with fallback if image is not provided or invalid
        </span>
      </div>
    );
  },
};
