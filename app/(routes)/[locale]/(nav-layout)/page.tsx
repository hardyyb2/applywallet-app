import Image from "next/image";
import Link from "next/link";

import { buttonVariants } from "~/components/ds/Button";
import { Card } from "~/components/ds/Card";
import { Flex } from "~/components/ds/Flex";
import { Typography } from "~/components/ds/Typography";
import { AppRoutes } from "~/utils/routes";

import UnderConstructionImg from "public/images/illustrations/under-construction.webp";

import { getI18n } from "@/locales/server";

const Home = async () => {
  const t = await getI18n();

  return (
    <div className="px-5 py-4 lg:px-10">
      <Flex justify="center">
        <Card side="lg" className="max-w-xl bg-base-200 text-base-content">
          <Card.Body className="items-center">
            <Typography
              variant="headline-m"
              lg="headline-l"
              align="center"
              className="first-letter:capitalize"
            >
              {t("home.title")}
            </Typography>

            <Card.Figure className="my-xs overflow-hidden rounded-lg">
              <Image
                src={UnderConstructionImg}
                alt="Under construction"
                placeholder="blur"
                blurDataURL={UnderConstructionImg.blurDataURL}
              />
            </Card.Figure>

            <Typography variant="body-m" lg="body-l" align="center">
              {t("home.alt_subtitle")}
            </Typography>

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
