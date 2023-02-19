import clsx from "clsx";

import { CopyButton } from "@/components/dependent/common";
import { Flex } from "@/components/isolated/common";

const CareerCard = ({ index }: { index: number }) => {
  return (
    <div className={clsx("card / bg-base-200")}>
      <div className="card-body prose prose-headings:m-0 prose-p:mt-1 prose-h6:font-light prose-h6:underline">
        <h2 className="card-title">Yellow.ai</h2>
        <div>
          <Flex align="center" justify="space-between">
            <h6>company description</h6>
            <CopyButton text="Role asdkasdas" />
          </Flex>
          <p>
            <em>
              Company - Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Distinctio animi fuga rerum temporibus quasi, consequuntur
              ipsam veritatis voluptas. Eum odit ab accusantium sapiente impedit
              tenetur delectus vero quidem voluptatum perferendis.
            </em>
          </p>
        </div>

        <h3>SDE (UI)</h3>
        <div>
          <Flex align="center" justify="space-between">
            <h6> role description</h6>
            <CopyButton text="Role asdkasdas" />
          </Flex>
          <p>
            Role - Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos itaque a sapiente eius nihil assumenda quaerat quis. Est
            veritatis, tempore ullam culpa aspernatur itaque et sequi
            consequatur aliquam temporibus veniam.
          </p>
        </div>

        <div>
          <Flex align="center" justify="space-between">
            <h6> job description</h6>
            <CopyButton text="Role asdkasdas" />
          </Flex>
          <strong>
            <p>
              Role - Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Quos itaque a sapiente eius nihil assumenda quaerat quis. Est
              veritatis, tempore ullam culpa aspernatur itaque et sequi
              consequatur aliquam temporibus veniam.
            </p>
          </strong>
        </div>
      </div>
    </div>
  );
};

export { CareerCard };
