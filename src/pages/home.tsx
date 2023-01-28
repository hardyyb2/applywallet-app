/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { FC } from "react";

import { Flex } from "@/components/common";
import { Drawer } from "@/components/wrapped";

const Home: FC = () => {
  return (
    <Flex className="gap-2">
      <Drawer
        side={
          <div>
            <ul className="menu p-4 w-80 bg-base-100 text-base-content">
              <li>
                <a>Sidebar Item 1</a>
              </li>
              <li>
                <a>Sidebar Item 2</a>
              </li>
            </ul>
          </div>
        }
        mobile
      >
        Hey there
      </Drawer>
    </Flex>
  );
};

export { Home };
