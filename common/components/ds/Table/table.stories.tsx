import type { Meta, StoryObj } from "@storybook/react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "./Table";

const meta = {
  title: "Data Display/Table",
  component: Table,
  tags: ["autodocs"],
} as Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof Table>;

export const Default: Story = {
  render: (args) => {
    return (
      <Table {...args}>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>{" "}
          <TableRow>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={4} className="text-right">
              Total: $1000.00
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    );
  },
};

export const ZebraTable: Story = {
  render: (args) => {
    return (
      <Table variant="zebra" {...args}>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={4} className="text-right">
              Total: $1000.00
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    );
  },
};

export const Sizes: Story = {
  render: (args) => {
    const sizes = ["xs", "sm", "md", "lg"] as const;

    return (
      <div className="flex flex-col items-center gap-4">
        {sizes.map((size) => (
          <Table {...args} size={size} key={size}>
            <TableCaption>{size}</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Invoice</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Method</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">INV001</TableCell>
                <TableCell>Paid</TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">INV001</TableCell>
                <TableCell>Paid</TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">INV001</TableCell>
                <TableCell>Paid</TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">INV001</TableCell>
                <TableCell>Paid</TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
              </TableRow>
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={4} className="text-right">
                  Total: $1000.00
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        ))}
      </div>
    );
  },
};

export const PinnedRows: Story = {
  render: (args) => {
    return (
      <div className="h-40 overflow-x-auto">
        <Table pinRows {...args}>
          <TableHeader>
            <TableRow>
              <TableHead>A</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Ant-Man</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Aquaman</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Asterix</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>The Atom</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>The Avengers</TableCell>
            </TableRow>
          </TableBody>
          <TableHeader>
            <TableRow>
              <TableHead>B</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Batman</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Black Panther</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Black Widow</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Blade</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Blue Beetle</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    );
  },
};

export const PinnedCols: Story = {
  render: (args) => {
    return (
      <div className="w-96 overflow-x-auto">
        <Table pinCols {...args}>
          <TableHeader>
            <TableRow>
              <TableHead></TableHead>
              <TableCell>Name</TableCell>
              <TableCell>Job</TableCell>
              <TableCell>company</TableCell>
              <TableCell>location</TableCell>
              <TableCell>Last Login</TableCell>
              <TableCell>Favorite Color</TableCell>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableHead>1</TableHead>
              <TableCell>Cy Ganderton</TableCell>
              <TableCell>Quality ConTableRowol Specialist</TableCell>
              <TableCell>Littel, Schaden and Vandervort</TableCell>
              <TableCell>Canada</TableCell>
              <TableCell>12/16/2020</TableCell>
              <TableCell>Blue</TableCell>
              <TableHead>1</TableHead>
            </TableRow>
            <TableRow>
              <TableHead>2</TableHead>
              <TableCell>Hart Hagerty</TableCell>
              <TableCell>Desktop Support Technician</TableCell>
              <TableCell>Zemlak, Daniel and Leannon</TableCell>
              <TableCell>United States</TableCell>
              <TableCell>12/5/2020</TableCell>
              <TableCell>Purple</TableCell>
              <TableHead>2</TableHead>
            </TableRow>
            <TableRow>
              <TableHead>3</TableHead>
              <TableCell>Brice Swyre</TableCell>
              <TableCell>Tax Accountant</TableCell>
              <TableCell>Carroll Group</TableCell>
              <TableCell>China</TableCell>
              <TableCell>8/15/2020</TableCell>
              <TableCell>Red</TableCell>
              <TableHead>3</TableHead>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    );
  },
};
