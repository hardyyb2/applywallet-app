import type { Meta, StoryObj } from "@storybook/react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  type AccordionProps,
} from "./Accordion";

const meta = {
  title: "Data Display/Accordion",
  component: Accordion,
  tags: ["autodocs"],
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof Accordion>;

const items = [
  <AccordionItem value="1" key="1">
    <AccordionTrigger>
      <div>Item 1</div>
    </AccordionTrigger>
    <AccordionContent>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, atque
      nisi. Id fugiat quis enim nobis cum nihil omnis molestiae velit harum non,
      sunt illum aliquid quisquam repellendus sed itaque?
    </AccordionContent>
  </AccordionItem>,
  <AccordionItem value="2" key="2">
    <AccordionTrigger>
      <div>Item 2</div>
    </AccordionTrigger>
    <AccordionContent>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, atque
      nisi. Id fugiat quis enim nobis cum nihil omnis molestiae velit harum non,
      sunt illum aliquid quisquam repellendus sed itaque?
    </AccordionContent>
  </AccordionItem>,
];

export const Box: Story = {
  render: (args: AccordionProps) => {
    return <Accordion {...args}>{items}</Accordion>;
  },
};

export const Lined: Story = {
  render: (args: AccordionProps) => {
    return (
      <Accordion {...args} variant="lined">
        {items}
      </Accordion>
    );
  },
};

export const Bordered: Story = {
  render: (args: AccordionProps) => {
    return (
      <Accordion {...args} variant="bordered">
        {items}
      </Accordion>
    );
  },
};
