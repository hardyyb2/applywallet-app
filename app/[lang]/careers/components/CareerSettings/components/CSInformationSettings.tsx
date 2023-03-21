"use client";

import { Reorder, useDragControls } from "framer-motion";
import { MouseEvent, useState } from "react";

import { Flex } from "@/components/isolated/common";
import { Button } from "@/components/isolated/wrapped";
import { EyeIcon, EyeSlashIcon, GripIcon } from "public/images/icons";

import { CareerSettingsInfoType } from "..";

const CSInformationSettings = () => {
  const dragControls = useDragControls();
  const [careerSettingItems, setCareerSettingItems] = useState<
    CareerSettingsInfoType[]
  >([
    {
      title: "job",
      order: 0,
      hidden: false,
    },
    {
      title: "company",
      order: 1,
      hidden: true,
    },
  ]);

  const handleReorder = (newOrder: CareerSettingsInfoType[]) => {
    const updatedOrder = newOrder.map((item, index) => {
      item.order = index;
      return item;
    });

    setCareerSettingItems(updatedOrder);
  };

  const handleListItemClick = (
    event: MouseEvent<HTMLLIElement>,
    itemIndex: number,
  ) => {
    const clickTarget = event.target as Element;
    const dataAction =
      clickTarget?.getAttribute("data-action") ||
      clickTarget?.closest("[data-action]")?.getAttribute("data-action");

    if (!dataAction) {
      return;
    }

    if (dataAction === "hide") {
      const clonedCareerSettingsItems = [...careerSettingItems];
      clonedCareerSettingsItems[itemIndex].hidden =
        !clonedCareerSettingsItems[itemIndex].hidden;

      setCareerSettingItems(clonedCareerSettingsItems);
    }
  };

  return (
    <Reorder.Group
      className="list-none pl-0"
      axis="y"
      values={careerSettingItems}
      onReorder={handleReorder}
    >
      {careerSettingItems.map((item, index) => (
        <Reorder.Item
          tabIndex={0}
          key={item.title}
          value={item}
          className="pl-0"
          onClick={(e) => handleListItemClick(e, index)}
        >
          <Flex
            align="center"
            direction="row"
            className="gap-4 / m-0 px-4 py-2 / bg-accent/5  rounded-xl"
          >
            <GripIcon
              className="flex-shrink-0 text-accent / cursor-grab active:cursor-grabbing"
              onPointerDown={(event: PointerEvent) => dragControls.start(event)}
            />
            <span className="line-clamp-1">{item.title}</span>
            <Button
              data-action="hide"
              color="ghost"
              className="ml-auto / hover:bg-accent/20 text-accent"
              startIcon={
                item.hidden ? (
                  <EyeSlashIcon className="pointer-events-none" />
                ) : (
                  <EyeIcon className="pointer-events-none" />
                )
              }
            >
              <span className="sr-only">hide</span>
            </Button>
          </Flex>
        </Reorder.Item>
      ))}
    </Reorder.Group>
  );
};

export { CSInformationSettings };
