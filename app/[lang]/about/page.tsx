"use client";

import clsx from "clsx";
import { toast } from "react-toastify";

const About = () => {
  const notify = () => toast("GHello there");

  return (
    <div className="p-8">
      <div
        className={clsx(
          "grid w-full gap-8",
          "grid-cols-[repeat(auto-fill,minmax(256px,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(320px,1fr))]",
        )}
      >
        {Array(20)
          .fill(undefined)
          .map((_item, index) => (
            <div key={index} className="card bg-base-200">
              <div className={clsx("card-body prose prose-h2:mb-0")}>
                <h2 className="card-title">Card title!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn-primary btn">Buy Now</button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

// eslint-disable-next-line import/no-default-export
export default About;
