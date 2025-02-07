import Image from "next/image";
import Link from "next/link";

import { buttonVariants } from "~/components/ds/Button";
import { Card } from "~/components/ds/Card";
import { Flex } from "~/components/ds/Flex";
import { AppRoutes } from "~/utils/routes";

import { getI18n } from "@/locales/server";

const Home = async () => {
  const t = await getI18n();

  return (
    <div className="px-5 py-4 lg:px-10">
      <Flex justify="center">
        <Card side="lg" className="max-w-xl bg-base-200 text-base-content">
          <Card.Body className="items-center">
            <Card.Title className="headline-m inline-block text-center lg:headline-l first-letter:capitalize">
              {t("home.title")}
            </Card.Title>

            <Card.Figure className="my-xs overflow-hidden rounded-lg">
              <Image
                src="/images/illustrations/under-construction.webp"
                alt="Under construction"
                width={500}
                height={400}
                quality={80}
              />
            </Card.Figure>

            <p className="body-m text-center lg:body-l">
              {t("home.alt_subtitle")}
            </p>

            <Card.Actions className="mt-4 w-full justify-center">
              <Link
                className={buttonVariants({
                  color: "primary",
                  className: "w-full",
                })}
                href={AppRoutes.BLOGS}
              >
                {t("routes.blogs")}
              </Link>
            </Card.Actions>
          </Card.Body>
        </Card>
      </Flex>
    </div>
  );
};

export default Home;
