import { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";

import { ConditionalMatch } from "@dx-kit/react-conditional-match";
import { getServerSession } from "next-auth";

import { LoginCard } from "@/components/ui/dependent/LoginCard";
import { Flex, Typography } from "@/components/ui/isolated/common";
import { Button } from "@/components/ui/isolated/wrapped";
import { Icons } from "@/components/ui/isolated/wrapped/Icons";
import { authOptions } from "@/lib/auth";

import { CareerActions } from "./components/CareerActions/CareerActions";
import { CareerList } from "./components/CareerList";

export const metadata: Metadata = {
  title: "careers",
};

const { Render } = ConditionalMatch;

const Careers = async () => {
  // constants
  const session = await getServerSession(authOptions);
  const isLoggedIn = session && session.accessToken;

  if (!isLoggedIn) {
    return (
      <Flex justify="center" className="p-s">
        <LoginCard />
      </Flex>
    );
  }

  return (
    <div className="px-6 py-4 lg:px-10">
      <Flex justify="space-between" align="center" className="mb-m-l gap-4">
        <Flex direction="column">
          <Typography variant="h3">careers</Typography>
          <Typography variant="subtitle2">
            details of your previous jobs
          </Typography>
        </Flex>

        <CareerActions />
      </Flex>

      <Suspense fallback="loading...">
        {/* @ts-expect-error Server Component */}
        <CareerList />
      </Suspense>

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
