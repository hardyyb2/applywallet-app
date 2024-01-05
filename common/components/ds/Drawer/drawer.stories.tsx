import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../Button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerOverlay,
  DrawerPortal,
  DrawerTitle,
  DrawerTrigger,
} from "./Drawer";

const meta = {
  title: "Layout/Drawer",
  component: Drawer,
  tags: ["autodocs"],
} satisfies Meta<typeof Drawer>;

export default meta;

type Story = StoryObj<typeof Drawer>;

export const Default: Story = {
  decorators: [
    (Story) => (
      <div vaul-drawer-wrapper="" className="flex w-max flex-col gap-4">
        <Story />
      </div>
    ),
  ],

  render() {
    return (
      <div className="flex w-max flex-col gap-4">
        <Drawer>
          <DrawerTrigger asChild>
            <Button>Open</Button>
          </DrawerTrigger>
          <DrawerPortal>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerTitle>Drawer Title</DrawerTitle>
              <DrawerDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                cupiditate, voluptate quibusdam, quos, aperiam iusto
                reprehenderit voluptatum dolorum quia quidem nemo. Quisquam
                voluptatibus, quibusdam quas voluptate nemo quae voluptatum
                officia!
              </DrawerDescription>
            </DrawerContent>
          </DrawerPortal>
        </Drawer>
      </div>
    );
  },
};
