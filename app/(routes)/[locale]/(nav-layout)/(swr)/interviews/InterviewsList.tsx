"use client";

import { BarLoader } from "@/components/isolated/BarLoader";
import { useInterviews } from "@/queries/interviews.queries";
import { cn } from "@/utils/styles.utils";

const InterviewsList = () => {
  const { data, isLoading } = useInterviews();

  if (isLoading) {
    return <BarLoader />;
  }

  return (
    <div
      className={cn(
        "grid w-full gap-8",
        "grid-cols-[repeat(auto-fill,minmax(256px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(400px,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(480px,1fr))]",
      )}
    >
      {data?.map((_item: any, index: number) => (
        <div key={index} className="card bg-base-200">
          <div className={cn("card-body")}>
            <h2 className="card-title">Card title!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export { InterviewsList };
