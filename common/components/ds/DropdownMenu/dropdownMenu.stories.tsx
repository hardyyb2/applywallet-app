import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  type DropdownMenuProps,
} from "./DropdownMenu";

const meta = {
  title: "Actions/DropdownMenu",
  component: DropdownMenu,
  tags: ["autodocs"],
} satisfies Meta<typeof DropdownMenu>;

export default meta;

type Story = StoryObj<typeof DropdownMenu>;

export const Default: Story = {
  render: (args: DropdownMenuProps) => {
    return (
      <DropdownMenu {...args}>
        <DropdownMenuTrigger>normal menu</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>item 1</DropdownMenuItem>
          <DropdownMenuItem>item 2</DropdownMenuItem>
          <DropdownMenuItem>item 3</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  },
};

export const WithCheckbox: Story = {
  render: (args: DropdownMenuProps) => {
    return (
      <DropdownMenu {...args}>
        <DropdownMenuTrigger>with checkbox menu</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>item 1</DropdownMenuItem>
          <DropdownMenuItem>item 2</DropdownMenuItem>
          <DropdownMenuItem>item 3</DropdownMenuItem>
          <DropdownMenuCheckboxItem checked>item 4</DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  },
};

export const WithRadioButton: Story = {
  render: (args: DropdownMenuProps) => {
    return (
      <DropdownMenu {...args}>
        <DropdownMenuTrigger>with radio group menu</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>item 1</DropdownMenuItem>
          <DropdownMenuItem>item 2</DropdownMenuItem>
          <DropdownMenuItem>item 3</DropdownMenuItem>
          <DropdownMenuRadioGroup value="apple">
            <DropdownMenuRadioItem value="apple">
              active radio
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="orange">
              inactive radio
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  },
};

export const WithSeparator: Story = {
  render: (args: DropdownMenuProps) => {
    return (
      <DropdownMenu {...args}>
        <DropdownMenuTrigger>with separator menu</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>item 1</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>item 2</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>item 3</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  },
};

export const WithShortcut: Story = {
  render: (args: DropdownMenuProps) => {
    return (
      <DropdownMenu {...args}>
        <DropdownMenuTrigger>with shortcut menu</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>item 1</DropdownMenuItem>
          <DropdownMenuItem>item 2</DropdownMenuItem>
          <DropdownMenuItem>item 3</DropdownMenuItem>
          <DropdownMenuItem>
            item 4<DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  },
};

export const WithSubmenu: Story = {
  render: (args: DropdownMenuProps) => {
    return (
      <DropdownMenu {...args}>
        <DropdownMenuTrigger>with submenu menu</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>item 1</DropdownMenuItem>

          <DropdownMenuGroup>
            <DropdownMenuItem>sub menu</DropdownMenuItem>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>invite users</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>email</DropdownMenuItem>
                  <DropdownMenuItem>message</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>more...</DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  },
};
