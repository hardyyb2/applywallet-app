"use client";

import { useRef, useState } from "react";
import Link from "next/link";

import { Flex } from "app/components/ui/isolated/common";
import { Button, Dialog } from "app/components/ui/isolated/wrapped";

import { Icons } from "@/components/ui/isolated/wrapped/Icons";
import { cn } from "@/utils/styles.utils";

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
            startIcon={<Icons.Settings />}
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
            startIcon={<Icons.Settings />}
            className="flex md:hidden"
          >
            <span className="hidden md:inline">settings</span>
          </Button>
        </Link>

        <Dialog.Portal>
          <Dialog.Overlay
            className={cn(
              "fixed inset-0 z-[40] h-full w-full overflow-y-hidden bg-primary bg-opacity-80 backdrop-blur",
              styles.dialogOverlay,
            )}
          />
          <Dialog.Content
            ref={contentRef}
            className={cn(
              "fixed right-0 top-0 z-50 h-full w-3/5 overflow-y-auto bg-base-100",
              styles.dialogContent,
            )}
          >
            <Flex className="sticky left-0 top-0 gap-4 bg-base-100 p-4">
              <Dialog.Close>
                <Button
                  tabIndex={-1}
                  color="ghost"
                  startIcon={<Icons.ChevronsRight />}
                >
                  close
                </Button>
              </Dialog.Close>

              <Link href="/careers/settings">
                <Button
                  color="ghost"
                  className="hidden md:flex"
                  startIcon={<Icons.Maximize />}
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
