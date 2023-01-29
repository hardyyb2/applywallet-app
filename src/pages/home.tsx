/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { FC } from "react";

import { Flex } from "@/components/isolated/common";
import { Drawer, ScrollArea } from "@/components/isolated/wrapped";

const Home: FC = () => {
  return (
    <Flex className="gap-2">
      <Drawer
        side={
          <ScrollArea.Root>
            <ul className="menu p-4 w-80 bg-base-100 text-base-content">
              {Array(9000)
                .fill(undefined)
                .map((a, id) => (
                  <li key={id}>
                    <a>Sidebar Item 1</a>
                  </li>
                ))}
            </ul>
          </ScrollArea.Root>
        }
        mobile
      >
        Hey there
      </Drawer>
    </Flex>
  );
};

export { Home };
