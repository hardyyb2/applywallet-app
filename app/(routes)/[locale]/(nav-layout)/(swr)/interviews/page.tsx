import type { Metadata } from "next";
import Link from "next/link";

import { getServerSession } from "next-auth";

import { Button } from "~/components/ds/Button";
import { Flex } from "~/components/ds/Flex";
import { Icons } from "~/components/ds/Icons";
import { AppRoutes } from "~/utils/routes";

import { LoginCard } from "@/components/dependent/LoginCard";
import { authOptions } from "@/lib/auth";

import { InterviewActions } from "./InterviewActions/InterviewActions";
import { InterviewsList } from "./InterviewsList";

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
      <Flex justify="space-between" align="center" className="mb-m-l gap-4">
        <Flex direction="column">
          <h1 className="headline-s lg:headline-m">interviews</h1>
          <h4 className="label-s lg:label-m">
            your ongoing or past interviews
          </h4>
        </Flex>

        <InterviewActions />
      </Flex>

      <InterviewsList />

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
