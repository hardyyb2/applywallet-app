import { CopyButton } from "@/components/ui/dependent";
import { Flex, Typography } from "@/components/ui/isolated/common";
import { CareerType } from "@/utils/schema-utils";
import { cn } from "@/utils/styles.utils";

import { CareerCardActions } from "./components/CareerCardActions";

interface CareerCardProps {
  career: CareerType;
}

const CareerCard = ({ career }: CareerCardProps) => {
  return (
    <div className={cn("card bg-base-200")}>
      <div className="card-body max-w-none [&_p]:line-clamp-3 [&_p]:whitespace-pre-line">
        <div className="absolute right-4 top-4">
          <CareerCardActions id={career.id} />
        </div>
        <Typography variant="h4" className="card-title">
          {career.company_name}
        </Typography>

        <div>
          <Flex align="center" justify="space-between">
            <Typography variant="subtitle2" className="!font-light underline">
              company description
            </Typography>
            <CopyButton text={career.company_description ?? ""} />
          </Flex>
          <Typography variant="body1" className="mb-5 mt-3xs">
            <em>{career.company_description}</em>
          </Typography>
        </div>

        <Typography variant="subtitle1">{career.role_name}</Typography>
        <div>
          <Flex align="center" justify="space-between">
            <Typography variant="subtitle2" className="!font-light underline">
              role description
            </Typography>
            <CopyButton text={career.role_description ?? ""} />
          </Flex>
          <Typography variant="body1" className="mb-5 mt-3xs">
            {career.role_description}
          </Typography>
        </div>

        <div>
          <Flex align="center" justify="space-between">
            <Typography variant="subtitle2" className="!font-light underline">
              job description
            </Typography>
            <CopyButton text={career.job_description} />
          </Flex>
          <strong>
            <Typography variant="body1" className="mb-5 mt-3xs !font-semibold">
              {career.job_description}
            </Typography>
          </strong>
        </div>
      </div>
    </div>
  );
};

export { CareerCard };
