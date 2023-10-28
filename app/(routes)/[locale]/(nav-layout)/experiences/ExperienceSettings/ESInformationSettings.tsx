"use client";

import { useState, type MouseEvent } from "react";

import { Reorder, useDragControls } from "framer-motion";

import { Button } from "@/components/isolated/Button";
import { Flex } from "@/components/isolated/Flex";
import { Icons } from "@/components/isolated/Icons";

import { type ExperienceSettingsInfoType } from ".";

const ESInformationSettings = () => {
  const dragControls = useDragControls();
  const [experienceSettingItems, setExperienceSettingItems] = useState<
    ExperienceSettingsInfoType[]
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

  const handleReorder = (newOrder: ExperienceSettingsInfoType[]) => {
    const updatedOrder = newOrder.map((item, index) => {
      item.order = index;
      return item;
    });

    setExperienceSettingItems(updatedOrder);
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
      const clonedExperienceSettingsItems = [...experienceSettingItems];
      clonedExperienceSettingsItems[itemIndex].hidden =
        !clonedExperienceSettingsItems[itemIndex].hidden;

      setExperienceSettingItems(clonedExperienceSettingsItems);
    }
  };

  return (
    <Reorder.Group
      className="list-none pl-0"
      axis="y"
      values={experienceSettingItems}
      onReorder={handleReorder}
    >
      {experienceSettingItems.map((item, index) => (
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
            className="m-0 gap-4 rounded-xl bg-accent/5 px-4  py-2"
          >
            <Icons.GripHorizontal
              className="flex-shrink-0 cursor-grab text-accent active:cursor-grabbing"
              onPointerDown={(event) => dragControls.start(event)}
            />
            <span className="line-clamp-1">{item.title}</span>
            <Button
              data-action="hide"
              color="ghost"
              className="/ ml-auto text-accent hover:bg-accent/20"
              startIcon={
                item.hidden ? (
                  <Icons.EyeOff className="pointer-events-none" />
                ) : (
                  <Icons.Eye className="pointer-events-none" />
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

export { ESInformationSettings };
