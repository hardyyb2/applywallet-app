import { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";

import { getServerSession } from "next-auth";

import { LoginCard } from "@/components/dependent/LoginCard";
import { BarLoader } from "@/components/isolated/BarLoader";
import { Button } from "@/components/isolated/Button";
import { Flex } from "@/components/isolated/Flex";
import { Icons } from "@/components/isolated/Icons";
import { Typography } from "@/components/isolated/Typography";
import { authOptions } from "@/lib/auth";
import { AppRoutes } from "@/utils/routes.utils";

import { ExperienceActions } from "./ExperienceActions/ExperienceActions";
import { ExperienceList } from "./ExperienceList";

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

      <Suspense fallback={<BarLoader />}>
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
