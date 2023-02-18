import { Flex } from "@/components/isolated/common";
import { Button } from "@/components/isolated/wrapped";
import clsx from "clsx";
import Link from "next/link";
import { CareerCard } from "./components/CareerCard";

const Careers = () => {
  return (
    <div className="px-6 lg:px-10 py-4">
      <Flex justify="space-between" align="center" className="mb-10">
        <Flex direction="column" className="prose prose-h1:mb-0 prose-p:mt-0 ">
          <h1 className="mb-8">careers</h1>
          <p>details of your previous jobs</p>
        </Flex>

        <Link href="/careers/add">
          <Button
            className="hidden lg:flex"
            startIcon={
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19,11H13V5a1,1,0,0,0-2,0v6H5a1,1,0,0,0,0,2h6v6a1,1,0,0,0,2,0V13h6a1,1,0,0,0,0-2Z" />
              </svg>
            }
          >
            add career
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
          startIcon={
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M19,11H13V5a1,1,0,0,0-2,0v6H5a1,1,0,0,0,0,2h6v6a1,1,0,0,0,2,0V13h6a1,1,0,0,0,0-2Z" />
            </svg>
          }
        >
          add career
        </Button>
      </Link>
    </div>
  );
};

// eslint-disable-next-line import/no-default-export
export default Careers;
