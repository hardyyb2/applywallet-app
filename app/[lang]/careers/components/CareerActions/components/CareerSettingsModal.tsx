"use client";

import { useRef, useState } from "react";
import Link from "next/link";

import clsx from "clsx";

import { Flex } from "app/components/ui/isolated/common";
import { Button, Dialog } from "app/components/ui/isolated/wrapped";

import {
  CaretRightDouble,
  MaximizeLeft,
  SettingsIcon,
} from "public/images/icons";

import { CareerSettings } from "../../CareerSettings";
import styles from "./careerSettingsModal.module.scss";

const CareerSettingsModal = () => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);

  const handleOpenChange = (newOpenState: boolean) => {
    setOpen(newOpenState);
  };

  return (
    <div>
      <Dialog.Root open={open} onOpenChange={handleOpenChange}>
        {/* show dialog only on >md screens */}
        <Dialog.Trigger asChild>
          <Button
            variant="outline"
            color="secondary"
            responsive
            startIcon={<SettingsIcon />}
            className="hidden md:flex"
          >
            <span className="hidden md:inline">settings</span>
          </Button>
        </Dialog.Trigger>

        {/* open settings in a page for <md screens */}
        <Link href="/careers/settings">
          <Button
            variant="outline"
            color="secondary"
            responsive
            startIcon={<SettingsIcon />}
            className="flex md:hidden"
          >
            <span className="hidden md:inline">settings</span>
          </Button>
        </Link>

        <Dialog.Portal>
          <Dialog.Overlay
            className={clsx(
              "fixed inset-0 z-[40] h-full w-full overflow-y-hidden bg-primary bg-opacity-80 backdrop-blur",
              styles.dialog__overlay,
            )}
          />
          <Dialog.Content
            ref={contentRef}
            className={clsx(
              "fixed right-0 top-0 z-50 h-full w-3/5 overflow-y-auto bg-base-100",
              styles.dialog__content,
            )}
          >
            <Flex className="sticky left-0 top-0 gap-4 bg-base-100 p-4">
              <Dialog.Close>
                <Button
                  tabIndex={-1}
                  color="ghost"
                  startIcon={<CaretRightDouble />}
                >
                  close
                </Button>
              </Dialog.Close>

              <Link href="/careers/settings">
                <Button
                  color="ghost"
                  className="hidden md:flex"
                  startIcon={<MaximizeLeft />}
                >
                  expand
                </Button>
              </Link>
            </Flex>
            <div className="px-16 py-8">
              {/* <Dialog.Title className="DialogTitle">Edit profile</Dialog.Title> */}
              <CareerSettings />
              {/* <Dialog.Close>close</Dialog.Close> */}
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
};

export { CareerSettingsModal };
