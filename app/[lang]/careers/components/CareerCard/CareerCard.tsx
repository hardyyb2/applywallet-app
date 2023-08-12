import clsx from "clsx";

import { CopyButton } from "app/components/ui/dependent/common";
import { Flex, Typography } from "app/components/ui/isolated/common";

import { CareerType } from "@/utils/schema-utils";

import { CareerCardActions } from "./components/CareerCardActions";

interface CareerCardProps {
  career: CareerType;
}

const CareerCard = ({ career }: CareerCardProps) => {
  return (
    <div className={clsx("card bg-base-200")}>
      <div className="card-body max-w-none [&_p]:line-clamp-3 [&_p]:whitespace-pre-line">
        <div className="absolute right-4 top-4">
          <CareerCardActions />
        </div>
        <Typography variant="h4" className="card-title">
          {career.company.name}
        </Typography>

        <div>
          <Flex align="center" justify="space-between">
            <Typography variant="subtitle2" className="!font-light underline">
              company description
            </Typography>
            <CopyButton text={career.company.description ?? ""} />
          </Flex>
          <Typography variant="body1" className="mb-5 mt-1">
            <em>{career.company.description}</em>
          </Typography>
        </div>

        <h3>{career.role.name}</h3>
        <div>
          <Flex align="center" justify="space-between">
            <Typography variant="subtitle2" className="!font-light underline">
              role description
            </Typography>
            <CopyButton text={career.role.description ?? ""} />
          </Flex>
          <Typography variant="body1" className="mb-5 mt-1">
            {career.role.description}
          </Typography>
        </div>

        <div>
          <Flex align="center" justify="space-between">
            <Typography variant="subtitle2" className="!font-light underline">
              job description
            </Typography>
            <CopyButton text={career.job.description} />
          </Flex>
          <strong>
            <Typography variant="body1" className="mb-5 mt-1">
              {career.job.description}
            </Typography>
          </strong>
        </div>
      </div>
    </div>
  );
};

export { CareerCard };
