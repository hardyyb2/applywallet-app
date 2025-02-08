import { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";

import { getServerSession } from "next-auth";

import { BarLoader } from "~/components/ds/BarLoader";
import { Button } from "~/components/ds/Button";
import { Flex } from "~/components/ds/Flex";
import { Icons } from "~/components/ds/Icons";
import { AppRoutes } from "~/utils/routes";

import { BasePageHeader } from "@/components/dependent/BasePageHeader";
import { LoginCard } from "@/components/dependent/LoginCard";
import { authOptions } from "@/lib/auth";

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
    <div className="px-5 py-4 lg:px-10">
      <BasePageHeader
        title="experiences"
        subtitle="your ongoing or past experiences"
      />

      <Flex justify="space-between" align="center" className="mb-m-l gap-4">
        <Flex direction="column">
          <h1 className="headline-s lg:headline-m">experiences</h1>
          <h4 className="label-s lg:label-m">
            your ongoing or past experiences
          </h4>
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
