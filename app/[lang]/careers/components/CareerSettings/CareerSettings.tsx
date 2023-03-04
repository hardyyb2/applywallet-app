"use client";

import clsx from "clsx";
import { useRef, useState } from "react";

import { NextLinkButton } from "@/components/dependent/common";
import { Button, Dialog } from "@/components/isolated/wrapped";
import { SettingsIcon } from "public/images";

import styles from "./careerSettings.module.scss";

const CareerSettings = () => {
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
        <NextLinkButton
          href="/careers/settings"
          variant="outline"
          color="secondary"
          responsive
          startIcon={<SettingsIcon />}
          className="flex md:hidden"
        >
          <span className="hidden md:inline">settings</span>
        </NextLinkButton>

        <Dialog.Portal>
          <Dialog.Overlay
            className={clsx(
              "fixed inset-0 h-full w-full / bg-primary bg-opacity-80 backdrop-blur overflow-y-hidden z-[40]",
              styles.dialog__overlay,
            )}
          />
          <Dialog.Content
            ref={contentRef}
            className={clsx(
              "fixed right-0 top-0 z-50 w-3/5 h-full / p-16 / bg-base-100 / overflow-y-auto",
              styles.dialog__content,
            )}
          >
            <div className="sticky top-0 left-0">actions</div>
            <Dialog.Title className="DialogTitle">Edit profile</Dialog.Title>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
            facilis temporibus quia soluta dolores doloribus eaque qui, autem
            laboriosam molestiae accusantium maiores laborum. Officia amet quam
            est incidunt accusamus magni. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. In ea exercitationem, quae sunt
            eveniet consectetur similique molestias unde illum facere error
            saepe, voluptas nemo. Saepe accusamus expedita rem impedit tenetur!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            possimus aperiam nulla. Possimus, omnis tenetur accusamus unde
            tempora dolor provident ea nihil fuga eveniet veritatis, ullam iusto
            odio deleniti commodi. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Debitis facilis temporibus quia soluta dolores
            doloribus eaque qui, autem laboriosam molestiae accusantium maiores
            laborum. Officia amet quam est incidunt accusamus magni. Lorem ipsum
            dolor, sit amet consectetur adipisicing elit. In ea exercitationem,
            quae sunt eveniet consectetur similique molestias unde illum facere
            error saepe, voluptas nemo. Saepe accusamus expedita rem impedit
            tenetur! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Similique possimus aperiam nulla. Possimus, omnis tenetur accusamus
            unde tempora dolor provident ea nihil fuga eveniet veritatis, ullam
            iusto odio deleniti commodi. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Debitis facilis temporibus quia soluta dolores
            doloribus eaque qui, autem laboriosam molestiae accusantium maiores
            laborum. Officia amet quam est incidunt accusamus magni. Lorem ipsum
            dolor, sit amet consectetur adipisicing elit. In ea exercitationem,
            quae sunt eveniet consectetur similique molestias unde illum facere
            error saepe, voluptas nemo. Saepe accusamus expedita rem impedit
            tenetur! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Similique possimus aperiam nulla. Possimus, omnis tenetur accusamus
            unde tempora dolor provident ea nihil fuga eveniet veritatis, ullam
            iusto odio deleniti commodi. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Debitis facilis temporibus quia soluta dolores
            doloribus eaque qui, autem laboriosam molestiae accusantium maiores
            laborum. Officia amet quam est incidunt accusamus magni. Lorem ipsum
            dolor, sit amet consectetur adipisicing elit. In ea exercitationem,
            quae sunt eveniet consectetur similique molestias unde illum facere
            error saepe, voluptas nemo. Saepe accusamus expedita rem impedit
            tenetur! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Similique possimus aperiam nulla. Possimus, omnis tenetur accusamus
            unde tempora dolor provident ea nihil fuga eveniet veritatis, ullam
            iusto odio deleniti commodi. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Debitis facilis temporibus quia soluta dolores
            doloribus eaque qui, autem laboriosam molestiae accusantium maiores
            laborum. Officia amet quam est incidunt accusamus magni. Lorem ipsum
            dolor, sit amet consectetur adipisicing elit. In ea exercitationem,
            quae sunt eveniet consectetur similique molestias unde illum facere
            error saepe, voluptas nemo. Saepe accusamus expedita rem impedit
            tenetur! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Similique possimus aperiam nulla. Possimus, omnis tenetur accusamus
            unde tempora dolor provident ea nihil fuga eveniet veritatis, ullam
            iusto odio deleniti commodi. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Debitis facilis temporibus quia soluta dolores
            doloribus eaque qui, autem laboriosam molestiae accusantium maiores
            laborum. Officia amet quam est incidunt accusamus magni. Lorem ipsum
            dolor, sit amet consectetur adipisicing elit. In ea exercitationem,
            quae sunt eveniet consectetur similique molestias unde illum facere
            error saepe, voluptas nemo. Saepe accusamus expedita rem impedit
            tenetur! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Similique possimus aperiam nulla. Possimus, omnis tenetur accusamus
            unde tempora dolor provident ea nihil fuga eveniet veritatis, ullam
            iusto odio deleniti commodi. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Debitis facilis temporibus quia soluta dolores
            doloribus eaque qui, autem laboriosam molestiae accusantium maiores
            laborum. Officia amet quam est incidunt accusamus magni. Lorem ipsum
            dolor, sit amet consectetur adipisicing elit. In ea exercitationem,
            quae sunt eveniet consectetur similique molestias unde illum facere
            error saepe, voluptas nemo. Saepe accusamus expedita rem impedit
            tenetur! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Similique possimus aperiam nulla. Possimus, omnis tenetur accusamus
            unde tempora dolor provident ea nihil fuga eveniet veritatis, ullam
            iusto odio deleniti commodi. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Debitis facilis temporibus quia soluta dolores
            doloribus eaque qui, autem laboriosam molestiae accusantium maiores
            laborum. Officia amet quam est incidunt accusamus magni. Lorem ipsum
            dolor, sit amet consectetur adipisicing elit. In ea exercitationem,
            quae sunt eveniet consectetur similique molestias unde illum facere
            error saepe, voluptas nemo. Saepe accusamus expedita rem impedit
            tenetur! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Similique possimus aperiam nulla. Possimus, omnis tenetur accusamus
            unde tempora dolor provident ea nihil fuga eveniet veritatis, ullam
            iusto odio deleniti commodi. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Debitis facilis temporibus quia soluta dolores
            doloribus eaque qui, autem laboriosam molestiae accusantium maiores
            laborum. Officia amet quam est incidunt accusamus magni. Lorem ipsum
            dolor, sit amet consectetur adipisicing elit. In ea exercitationem,
            quae sunt eveniet consectetur similique molestias unde illum facere
            error saepe, voluptas nemo. Saepe accusamus expedita rem impedit
            tenetur! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Similique possimus aperiam nulla. Possimus, omnis tenetur accusamus
            unde tempora dolor provident ea nihil fuga eveniet veritatis, ullam
            iusto odio deleniti commodi.
            <Dialog.Close>close</Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
};

export { CareerSettings };
