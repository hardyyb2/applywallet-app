import type { ReactNode } from "react";

import { Flex } from "~/components/ds/Flex";
import { Typography } from "~/components/ds/Typography";

type BasePageHeaderProps = {
  title: ReactNode;
  subtitle: ReactNode;
};

const BasePageHeader = ({ title, subtitle }: BasePageHeaderProps) => {
  return (
    <Flex direction="column" className="mb-s-m">
      <Typography variant="title-l" lg="headline-m">
        {title}
      </Typography>
      <Typography variant="label-xs" lg="label-m">
        {subtitle}
      </Typography>
    </Flex>
  );
};

export { BasePageHeader };
