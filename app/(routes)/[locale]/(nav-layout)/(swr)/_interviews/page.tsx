import type { Metadata } from "next";
import Link from "next/link";

import { getServerSession } from "next-auth";

import { Button } from "~/components/ds/Button";
import { Flex } from "~/components/ds/Flex";
import { Icons } from "~/components/ds/Icons";
import { AppRoutes } from "~/utils/routes";

import { BasePageHeader } from "@/components/dependent/BasePageHeader";
import { LoginCard } from "@/components/dependent/LoginCard";
import { authOptions } from "@/lib/auth";

import { InterviewActions } from "./InterviewActions/InterviewActions";
import { InterviewsList } from "./InterviewsList";
import { InterviewsTable } from "./InterviewsTable";

export const metadata: Metadata = {
  title: "interviews",
};

const Interviews = async () => {
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
        title="interviews"
        subtitle="your ongoing or past interviews"
      />

      <InterviewsTable />

      <Link href={AppRoutes.ADD_INTERVIEW}>
        <Button
          color="secondary"
          fullWidth
          size="lg"
          className="mt-l lg:hidden"
          startIcon={<Icons.Plus />}
        >
          add interview
        </Button>
      </Link>
    </div>
  );
};

export default Interviews;
