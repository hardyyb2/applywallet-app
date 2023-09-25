"use client";

import React, { Fragment } from "react";

import useSWR from "swr";

import { cn } from "@/utils/styles.utils";

const InterviewsList = () => {
  const { data, isLoading } = useSWR("todos", async (...args) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    return (await res.json()) as any[];
  });

  if (isLoading) {
    return <div>loading</div>;
  }

  return (
    <Fragment>
      {data?.map((_item, index) => (
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
    </Fragment>
  );
};

export { InterviewsList };
