/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { Drawer, ScrollArea } from "@/components/isolated/wrapped";
import { FC } from "react";

const Home: FC = () => {
  return (
    <Drawer
      mobile
      className="h-full"
      side={
        <ScrollArea.Root>
          <ScrollArea.Viewport className="w-full h-full">
            <ul className="menu w-40 p-4">
              {Array(900)
                .fill(undefined)
                .map((_item, index) => (
                  <li key={index} className="">
                    <a href="#a">{index}</a>
                  </li>
                ))}
            </ul>
          </ScrollArea.Viewport>
        </ScrollArea.Root>
      }
    >
      <section>
        {" "}
        {Array(900)
          .fill(undefined)
          .map((_item, index) => (
            <li key={index} className="">
              <a href="#a">{index}</a>
            </li>
          ))}
      </section>
    </Drawer>
  );
};

export { Home };
