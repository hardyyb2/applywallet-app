import clsx from "clsx";
import type { Metadata } from "next";
import Link from "next/link";

import { Flex } from "@/components/isolated/common";
import { Button } from "@/components/isolated/wrapped";
import { AddIcon } from "public/images";

import { CareerType } from "./career.types";
import { CareerActions } from "./components/CareerActions/CareerActions";
import { CareerCard } from "./components/CareerCard";
import { careerDataMock } from "./mock/careers";

export const metadata: Metadata = {
  title: "careers",
};

const fetchCareers = (): Promise<CareerType[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(careerDataMock);
    }, 2000);
  });
};

const Careers = async () => {
  const careers = await fetchCareers();

  return (
    <div className="px-6 lg:px-10 py-4">
      <Flex justify="space-between" align="center" className="mb-10 gap-4">
        <Flex
          direction="column"
          className="prose prose-sm md:prose-base prose-h1:!mb-0 prose-p:!mt-0 "
        >
          <h1>careers</h1>
          <p>details of your previous jobs</p>
        </Flex>

        <CareerActions />
      </Flex>
      <div
        className={clsx(
          "w-full / grid gap-8",
          "grid-cols-[repeat(auto-fill,minmax(256px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(400px,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(480px,1fr))]",
        )}
      >
        {careers.map((career) => (
          <CareerCard key={career.company.name} career={career} />
        ))}
      </div>

      <Link href="/careers/add">
        <Button
          color="secondary"
          fullWidth
          size="lg"
          className="lg:hidden mt-10"
          startIcon={<AddIcon />}
        >
          add career
        </Button>
      </Link>
    </div>
  );
};

// eslint-disable-next-line import/no-default-export
export default Careers;
