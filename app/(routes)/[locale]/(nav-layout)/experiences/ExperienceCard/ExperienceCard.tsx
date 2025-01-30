import { Flex } from "~/components/ds/Flex";

import { type ExperienceType } from "@/lib/schema/experience";
import { cn } from "@/utils/styles";

import { ExperienceCardActions } from "./ExperienceCardActions";

interface ExperienceCardProps {
  experience: ExperienceType;
}

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  return (
    <div className={cn("card bg-base-200")}>
      {/* <div className="card-body max-w-none [&_p]:line-clamp-3 [&_p]:whitespace-pre-line">
        <div className="absolute right-4 top-4">
          <ExperienceCardActions id={experience.id} />
        </div>
        <Typography className="card-title">
          {experience.company_name}
        </Typography>

        <div>
          <Flex align="center" justify="space-between">
            <Typography className="!font-light underline">
              company description
            </Typography>
            <CopyButton text={experience.company_description ?? ""} />
          </Flex>
          <Typography className="mb-5 mt-3xs">
            <em>{experience.company_description}</em>
          </Typography>
        </div>

        <Typography>{experience.role_name}</Typography>
        <div>
          <Flex align="center" justify="space-between">
            <Typography className="!font-light underline">
              role description
            </Typography>
            <CopyButton text={experience.role_description ?? ""} />
          </Flex>
          <Typography className="mb-5 mt-3xs">
            {experience.role_description}
          </Typography>
        </div>

        <div>
          <Flex align="center" justify="space-between">
            <Typography className="!font-light underline">
              job description
            </Typography>
            <CopyButton text={experience.job_description} />
          </Flex>
          <strong>
            <Typography className="mb-5 mt-3xs !font-semibold">
              {experience.job_description}
            </Typography>
          </strong>
        </div>
      </div> */}
    </div>
  );
};

export { ExperienceCard };
