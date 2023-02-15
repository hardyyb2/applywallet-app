import { Button } from "@/components/isolated/wrapped";
import clsx from "clsx";
import Link from "next/link";
import { CareerCard } from "./components/CareerCard";

const Careers = () => {
  return (
    <div className="px-6 lg:px-10 py-4">
      <div
        className={clsx(
          "w-full / grid gap-8",
          "grid-cols-[repeat(auto-fill,minmax(256px,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(320px,1fr))]",
        )}
      >
        <CareerCard />
      </div>
    </div>
  );
};

// eslint-disable-next-line import/no-default-export
export default Careers;
