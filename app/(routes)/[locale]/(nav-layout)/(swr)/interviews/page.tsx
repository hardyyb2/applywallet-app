import type { Metadata } from "next";
import Link from "next/link";

import { getServerSession } from "next-auth";

import { LoginCard } from "@/components/dependent/LoginCard";
import { Button, Flex, Typography } from "@/components/isolated";
import { Icons } from "@/components/isolated/Icons";
import { authOptions } from "@/lib/auth";
import { AppRoutes } from "@/utils/routes.utils";

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
    <div className="px-6 py-4 lg:px-10">
      <Flex justify="space-between" align="center" className="mb-m-l gap-4">
        <Flex direction="column">
          <Typography variant="h3">interviews</Typography>
          <Typography variant="subtitle2">
            your ongoing or past interviews
          </Typography>
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
