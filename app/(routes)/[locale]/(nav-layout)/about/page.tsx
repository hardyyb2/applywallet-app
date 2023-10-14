import Link from "next/link";

import { AppRoutes } from "@/utils/routes.utils";

const AboutPage = () => {
  return (
    <div>
      <Link href={AppRoutes.PROJECT_STRUCTURE}>project structure</Link>
    </div>
  );
};

export default AboutPage;
