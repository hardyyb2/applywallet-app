import { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";

import { Flex, Typography } from "app/components/ui/isolated/common";
import { Button } from "app/components/ui/isolated/wrapped";

import { AddIcon } from "public/images/icons";

import { CareerActions } from "./components/CareerActions/CareerActions";
import { CareerList } from "./components/CareerList";

export const metadata: Metadata = {
  title: "careers",
};

const Careers = async () => {
  return (
    <div className="px-6 py-4 lg:px-10">
      <Flex justify="space-between" align="center" className="mb-10 gap-4">
        <Flex direction="column" className="">
          <Typography variant="h2">careers</Typography>
          <Typography variant="subtitle2">
            details of your previous jobs
          </Typography>
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
          className="mt-10 lg:hidden"
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
