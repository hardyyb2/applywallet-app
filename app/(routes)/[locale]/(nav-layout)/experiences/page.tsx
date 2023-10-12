import { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";

import { getServerSession } from "next-auth";

import { LoginCard } from "@/components/ui/dependent/LoginCard";
import { Flex, Typography } from "@/components/ui/isolated/common";
import { Button } from "@/components/ui/isolated/wrapped";
import { Icons } from "@/components/ui/isolated/wrapped/Icons";
import { authOptions } from "@/lib/auth";
import { AppRoutes } from "@/utils/routes.utils";

import { ExperienceActions } from "./components/ExperienceActions/ExperienceActions";
import { ExperienceList } from "./components/ExperienceList";

export const metadata: Metadata = {
  title: "experiences",
};

const Experiences = async () => {
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
          <Typography variant="h3">experiences</Typography>
          <Typography variant="subtitle2">
            details of your previous jobs
          </Typography>
        </Flex>

        <ExperienceActions />
      </Flex>

      <Suspense fallback="loading...">
        <ExperienceList />
      </Suspense>

      <Link href={AppRoutes.ADD_EXPERIENCE}>
        <Button
          color="secondary"
          fullWidth
          size="lg"
          className="mt-l lg:hidden"
          startIcon={<Icons.Plus />}
        >
          add experience
        </Button>
      </Link>
    </div>
  );
};

export default Experiences;
