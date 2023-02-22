import { Breadcrumbs } from "@/components/isolated/wrapped";
import { AppRoutes } from "@/utils/routes.utils";
import Link from "next/link";

import { AddCareerForm } from "./components/AddCareerForm";

const AddCareer = () => {
  return (
    <div className="m-4 mt-0 prose prose-ul:pl-0 prose-ul:m-0">
      <Breadcrumbs className="pt-0 mb-2 [&_a]:no-underline">
        <Breadcrumbs.Item>
          <Link href={AppRoutes.CAREERS}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            careers
          </Link>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item>
          <Link href={AppRoutes.ADD_CAREER}>add</Link>
        </Breadcrumbs.Item>
      </Breadcrumbs>
      <AddCareerForm />
    </div>
  );
};

// eslint-disable-next-line import/no-default-export
export default AddCareer;
