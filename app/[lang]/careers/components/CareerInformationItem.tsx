import { useDragControls } from "framer-motion";

import { Flex } from "@/components/isolated/common";
import { EyeIcon, GripIcon } from "public/images";
import { PointerEvent } from "react";
import { Button } from "@/components/isolated/wrapped";

const CareerInformationItem = () => {
  const dragControls = useDragControls();

  return (
    <Flex
      align="center"
      direction="row"
      className="gap-2 / m-0 px-4 py-2 / bg-accent text-primary-content rounded-xl"
    >
      <GripIcon
        className="cursor-grab active:cursor-grabbing"
        onPointerDown={(event: PointerEvent) => dragControls.start(event)}
      />
      <span>hello there i am using whatsapp</span>
      <Button color="ghost" className="ml-auto" startIcon={<EyeIcon class />} />
    </Flex>
  );
};

export { CareerInformationItem };
