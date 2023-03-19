import clsx from "clsx";
import type { Metadata } from "next";
import Link from "next/link";

import { Flex } from "@/components/isolated/common";
import { Button } from "@/components/isolated/wrapped";
import { AddIcon } from "public/images";

import { CareerType } from "./career.types";
import { CareerActions } from "./components/CareerActions/CareerActions";
import { CareerCard } from "./components/CareerCard";

export const metadata: Metadata = {
  title: "careers",
};

const data: CareerType[] = [
  {
    company: {
      name: "ABC Corp",
      description: "A multinational corporation",
    },
    role: {
      name: "Marketing Manager",
      description: "Responsible for developing marketing strategies",
    },
    job: {
      description:
        "Develop and execute marketing campaigns to drive brand awareness and customer acquisition",
    },
  },
  {
    company: {
      name: "XYZ Inc",
      description: "A startup company",
    },
    role: {
      name: "Software Developer",
      description:
        "Responsible for developing and maintaining software applications",
    },
    job: {
      description:
        "Design and develop software applications using programming languages such as Java and Python",
    },
  },
  {
    company: {
      name: "PQR Corp",
      description: "A manufacturing company",
    },
    role: {
      name: "Production Manager",
      description: "Responsible for overseeing production processes",
    },
    job: {
      description:
        "Ensure that production processes are efficient and meet quality standards",
    },
  },
  {
    company: {
      name: "LMN Inc",
      description: "A consulting firm",
    },
    role: {
      name: "Business Analyst",
      description:
        "Responsible for analyzing business data and providing insights",
    },
    job: {
      description:
        "Analyze business data and provide recommendations for improving business performance",
    },
  },
  {
    company: {
      name: "EFG Corp",
      description: "A technology company",
    },
    role: {
      name: "Product Manager",
      description: "Responsible for managing product development",
    },
    job: {
      description:
        "Manage product development projects and ensure that products meet customer needs and are delivered on time",
    },
  },
];

const fetchCareers = (): Promise<CareerType[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });
};

const Careers = async () => {
  const careers = await fetchCareers();

  return (
    <div className="px-6 lg:px-10 py-4">
      <Flex justify="space-between" align="center" className="mb-10 gap-4">
        <Flex
          direction="column"
          className="prose prose-sm md:prose-base prose-h1:!mb-0 prose-p:!mt-0 "
        >
          <h1>careers</h1>
          <p>details of your previous jobs</p>
        </Flex>

        <CareerActions />
      </Flex>
      <div
        className={clsx(
          "w-full / grid gap-8",
          "grid-cols-[repeat(auto-fill,minmax(256px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(400px,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(480px,1fr))]",
        )}
      >
        {careers.map((career) => (
          <CareerCard key={career.company.name} career={career} />
        ))}
      </div>

      <Link href="/careers/add">
        <Button
          color="secondary"
          fullWidth
          size="lg"
          className="lg:hidden mt-10"
          startIcon={<AddIcon />}
        >
          add career
        </Button>
      </Link>
    </div>
  );
};

// eslint-disable-next-line import/no-default-export
export default Careers;
