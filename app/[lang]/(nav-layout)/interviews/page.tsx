"use client";

import { toast } from "react-toastify";

import { cn } from "@/utils/styles.utils";

const Interviews = () => {
  const notify = () => toast("GHello there");

  return (
    <div className="p-8">
      <div
        className={cn(
          "grid w-full gap-8",
          "grid-cols-[repeat(auto-fill,minmax(256px,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(320px,1fr))]",
        )}
      >
        {Array(20)
          .fill(undefined)
          .map((_item, index) => (
            <div key={index} className="card bg-base-200">
              <div className={cn("card-body")}>
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

export default Interviews;
