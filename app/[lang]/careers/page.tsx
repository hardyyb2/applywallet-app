import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

import { Flex } from "@/components/isolated/common";
import { Button } from "@/components/isolated/wrapped";
import { AddIcon } from "public/images";

import { CareerCard } from "./components/CareerCard";

const Careers = () => {
  return (
    <div className="px-6 lg:px-10 py-4">
      <Flex justify="space-between" align="center" className="mb-10">
        <Flex
          direction="column"
          className="prose prose-sm md:prose-base prose-h1:!mb-0 prose-p:!mt-0 "
        >
          <h1>careers</h1>
          <p>details of your previous jobs</p>
        </Flex>

        <Link href="/careers/add">
          <Button color="secondary" startIcon={<AddIcon />}>
            <span className="hidden lg:inline">add career</span>
          </Button>
        </Link>
      </Flex>
      <div
        className={clsx(
          "w-full / grid gap-8",
          "grid-cols-[repeat(auto-fill,minmax(256px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(400px,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(480px,1fr))]",
        )}
      >
        {Array(5)
          .fill(undefined)
          .map((_item, key) => (
            <CareerCard key={key} index={key} />
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
