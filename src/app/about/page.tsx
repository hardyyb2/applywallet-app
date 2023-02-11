/* eslint-disable import/no-default-export */

import { BaseScrollbar } from "@/components/dependent/common";
import { Typography } from "@/components/isolated/common";
import { Navbar } from "@/components/isolated/wrapped";
import clsx from "clsx";

const About = () => {
  return (
    <div className="p-8">
      <Navbar>hello</Navbar>
      <Typography variant="h1" className="mb-8">
        About
      </Typography>
      <BaseScrollbar>
        <div
          className={clsx(
            "w-full / grid gap-8",
            "grid-cols-[repeat(auto-fill,minmax(256px,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(320px,1fr))]",
          )}
        >
          {Array(20)
            .fill(undefined)
            .map((_item, index) => (
              <div key={index} className=" card bg-base-200">
                <div className="card-body">
                  <h2 className="card-title">Card title!</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </BaseScrollbar>
    </div>
  );
};

export default About;
