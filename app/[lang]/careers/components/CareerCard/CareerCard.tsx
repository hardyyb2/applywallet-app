import clsx from "clsx";

import { CopyButton } from "@/components/ui/dependent/common";
import { Flex } from "@/components/ui/isolated/common";

import { CareerType } from "../../career.types";

import { CareerCardActions } from "./components/CareerCardActions";

interface CareerCardProps {
  career: CareerType;
}

const CareerCard = ({ career }: CareerCardProps) => {
  return (
    <div className={clsx("card / bg-base-200")}>
      <div
        className={clsx(
          "card-body",
          "prose prose-sm md:prose-base max-w-none prose-headings:!m-0 prose-p:!mt-1 prose-h6:!font-light prose-h6:!underline",
          "[&_p]:line-clamp-3 [&_p]:whitespace-pre-line",
        )}
      >
        <div className="absolute right-4 top-4">
          <CareerCardActions />
        </div>
        <h2 className="card-title">{career.company.name}</h2>

        <div>
          <Flex align="center" justify="space-between">
            <h6>company description</h6>
            <CopyButton text={career.company.description ?? ""} />
          </Flex>
          <p>
            <em>{career.company.description}</em>
          </p>
        </div>

        <h3>{career.role.name}</h3>
        <div>
          <Flex align="center" justify="space-between">
            <h6>role description</h6>
            <CopyButton text={career.role.description ?? ""} />
          </Flex>
          <p>{career.role.description}</p>
        </div>

        <div>
          <Flex align="center" justify="space-between">
            <h6>job description</h6>
            <CopyButton text={career.job.description} />
          </Flex>
          <strong>
            <p>{career.job.description}</p>
          </strong>
        </div>
      </div>
    </div>
  );
};

export { CareerCard };
