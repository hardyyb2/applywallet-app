import type { ReactNode } from "react";

import { Flex } from "~/components/ds/Flex";

type BasePageHeaderProps = {
  title: ReactNode;
  subtitle: ReactNode;
};

const BasePageHeader = ({ title, subtitle }: BasePageHeaderProps) => {
  return (
    <Flex direction="column" className="mb-s-m">
      <h1 className="headline-s lg:headline-m">{title}</h1>
      <h4 className="label-s lg:label-m">{subtitle}</h4>
    </Flex>
  );
};

export { BasePageHeader };
