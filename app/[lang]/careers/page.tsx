import type { Metadata } from "next";
import Link from "next/link";

import { Flex } from "@/components/ui/isolated/common";
import { Button } from "@/components/ui/isolated/wrapped";
import { AddIcon } from "public/images/icons";

import { CareerActions } from "./components/CareerActions/CareerActions";
import { CareerList } from "./components/CareerList";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "careers",
};

const Careers = async () => {
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
      <Suspense fallback="loading...">
        {/* @ts-expect-error Async Server Component */}
        <CareerList />
      </Suspense>

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
