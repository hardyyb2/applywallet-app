"use client";

import { Button, Dialog } from "@/components/isolated/wrapped";
import { SettingsIcon } from "public/images";

const CareerSettings = () => {
  return (
    <div>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <Button
            variant="outline"
            color="secondary"
            responsive
            startIcon={<SettingsIcon />}
          >
            settings
          </Button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 h-full w-full / bg-primary bg-opacity-80 overflow-y-hidden z-[40]" />
          <Dialog.Content className="fixed right-0 top-0 z-50 w-3/5 h-full / bg-base-100 / overflow-y-hidden">
            <div className="sticky top-0 left-0">actions</div>
            <div className="h-full overflow-y-auto">
              <Dialog.Title className="DialogTitle">Edit profile</Dialog.Title>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
              facilis temporibus quia soluta dolores doloribus eaque qui, autem
              laboriosam molestiae accusantium maiores laborum. Officia amet
              quam est incidunt accusamus magni. Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. In ea exercitationem, quae sunt
              eveniet consectetur similique molestias unde illum facere error
              saepe, voluptas nemo. Saepe accusamus expedita rem impedit
              tenetur! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Similique possimus aperiam nulla. Possimus, omnis tenetur
              accusamus unde tempora dolor provident ea nihil fuga eveniet
              veritatis, ullam iusto odio deleniti commodi. Lorem ipsum dolor
              sit amet, consectetur adipisicing elit. Debitis facilis temporibus
              quia soluta dolores doloribus eaque qui, autem laboriosam
              molestiae accusantium maiores laborum. Officia amet quam est
              incidunt accusamus magni. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. In ea exercitationem, quae sunt eveniet
              consectetur similique molestias unde illum facere error saepe,
              voluptas nemo. Saepe accusamus expedita rem impedit tenetur! Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Similique
              possimus aperiam nulla. Possimus, omnis tenetur accusamus unde
              tempora dolor provident ea nihil fuga eveniet veritatis, ullam
              iusto odio deleniti commodi. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Debitis facilis temporibus quia
              soluta dolores doloribus eaque qui, autem laboriosam molestiae
              accusantium maiores laborum. Officia amet quam est incidunt
              accusamus magni. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. In ea exercitationem, quae sunt eveniet
              consectetur similique molestias unde illum facere error saepe,
              voluptas nemo. Saepe accusamus expedita rem impedit tenetur! Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Similique
              possimus aperiam nulla. Possimus, omnis tenetur accusamus unde
              tempora dolor provident ea nihil fuga eveniet veritatis, ullam
              iusto odio deleniti commodi. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Debitis facilis temporibus quia
              soluta dolores doloribus eaque qui, autem laboriosam molestiae
              accusantium maiores laborum. Officia amet quam est incidunt
              accusamus magni. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. In ea exercitationem, quae sunt eveniet
              consectetur similique molestias unde illum facere error saepe,
              voluptas nemo. Saepe accusamus expedita rem impedit tenetur! Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Similique
              possimus aperiam nulla. Possimus, omnis tenetur accusamus unde
              tempora dolor provident ea nihil fuga eveniet veritatis, ullam
              iusto odio deleniti commodi. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Debitis facilis temporibus quia
              soluta dolores doloribus eaque qui, autem laboriosam molestiae
              accusantium maiores laborum. Officia amet quam est incidunt
              accusamus magni. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. In ea exercitationem, quae sunt eveniet
              consectetur similique molestias unde illum facere error saepe,
              voluptas nemo. Saepe accusamus expedita rem impedit tenetur! Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Similique
              possimus aperiam nulla. Possimus, omnis tenetur accusamus unde
              tempora dolor provident ea nihil fuga eveniet veritatis, ullam
              iusto odio deleniti commodi. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Debitis facilis temporibus quia
              soluta dolores doloribus eaque qui, autem laboriosam molestiae
              accusantium maiores laborum. Officia amet quam est incidunt
              accusamus magni. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. In ea exercitationem, quae sunt eveniet
              consectetur similique molestias unde illum facere error saepe,
              voluptas nemo. Saepe accusamus expedita rem impedit tenetur! Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Similique
              possimus aperiam nulla. Possimus, omnis tenetur accusamus unde
              tempora dolor provident ea nihil fuga eveniet veritatis, ullam
              iusto odio deleniti commodi. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Debitis facilis temporibus quia
              soluta dolores doloribus eaque qui, autem laboriosam molestiae
              accusantium maiores laborum. Officia amet quam est incidunt
              accusamus magni. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. In ea exercitationem, quae sunt eveniet
              consectetur similique molestias unde illum facere error saepe,
              voluptas nemo. Saepe accusamus expedita rem impedit tenetur! Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Similique
              possimus aperiam nulla. Possimus, omnis tenetur accusamus unde
              tempora dolor provident ea nihil fuga eveniet veritatis, ullam
              iusto odio deleniti commodi. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Debitis facilis temporibus quia
              soluta dolores doloribus eaque qui, autem laboriosam molestiae
              accusantium maiores laborum. Officia amet quam est incidunt
              accusamus magni. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. In ea exercitationem, quae sunt eveniet
              consectetur similique molestias unde illum facere error saepe,
              voluptas nemo. Saepe accusamus expedita rem impedit tenetur! Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Similique
              possimus aperiam nulla. Possimus, omnis tenetur accusamus unde
              tempora dolor provident ea nihil fuga eveniet veritatis, ullam
              iusto odio deleniti commodi. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Debitis facilis temporibus quia
              soluta dolores doloribus eaque qui, autem laboriosam molestiae
              accusantium maiores laborum. Officia amet quam est incidunt
              accusamus magni. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. In ea exercitationem, quae sunt eveniet
              consectetur similique molestias unde illum facere error saepe,
              voluptas nemo. Saepe accusamus expedita rem impedit tenetur! Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Similique
              possimus aperiam nulla. Possimus, omnis tenetur accusamus unde
              tempora dolor provident ea nihil fuga eveniet veritatis, ullam
              iusto odio deleniti commodi.
              <Dialog.Close>close</Dialog.Close>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
};

export { CareerSettings };
