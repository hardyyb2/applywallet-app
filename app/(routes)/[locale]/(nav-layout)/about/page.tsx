import Link from "next/link";

import { Flex, Typography } from "@/components/ui/isolated/common";
import { AppRoutes } from "@/utils/routes.utils";

import { AboutCard } from "./project-structure/components/AboutCard";

const AboutPage = () => {
  return (
    <div className="px-6 py-4 lg:px-10">
      <Flex justify="space-between" align="center" className="mb-m-l gap-4">
        <Flex direction="column">
          <Typography variant="h3">about</Typography>
          <Typography variant="subtitle2">extra things here</Typography>
        </Flex>
      </Flex>
      <div className="w-96">
        <AboutCard />
      </div>
      <Link href={AppRoutes.PROJECT_STRUCTURE}>project structure</Link>
    </div>
  );
};

export default AboutPage;
