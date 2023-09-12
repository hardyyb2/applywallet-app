import { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";

import { Flex, Typography } from "app/components/ui/isolated/common";
import { Button, Card } from "app/components/ui/isolated/wrapped";

import { LoginCard } from "@/components/ui/dependent/LoginCard";
import { Icons } from "@/components/ui/isolated/wrapped/Icons";

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
          <Typography variant="h3">careers</Typography>
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

      <Flex justify="center">
        <LoginCard />
      </Flex>

      <Link href="/careers/add">
        <Button
          color="secondary"
          fullWidth
          size="lg"
          className="mt-l lg:hidden"
          startIcon={<Icons.Plus />}
        >
          add career
        </Button>
      </Link>
    </div>
  );
};

export default Careers;
