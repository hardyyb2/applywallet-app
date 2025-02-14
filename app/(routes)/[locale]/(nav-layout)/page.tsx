import Image from "next/image";
import Link from "next/link";

import { setStaticParamsLocale } from "next-international/server";

import { buttonVariants } from "~/components/ds/Button";
import { Card } from "~/components/ds/Card";
import { Flex } from "~/components/ds/Flex";
import { Typography } from "~/components/ds/Typography";
import { AppRoutes } from "~/utils/routes";

import UnderConstructionImg from "public/images/illustrations/under-construction.webp";

import { getI18n, getStaticParams } from "@/locales/server";

export const generateStaticParams = () => {
  return getStaticParams();
};

type HomeProps = {
  params: Promise<{ locale: string }>;
};

const Home = async ({ params }: HomeProps) => {
  setStaticParamsLocale((await params).locale);
  const t = await getI18n();

  return (
    <div className="px-5 py-4 lg:px-10">
      <Flex justify="center">
        <Card side="lg" className="bg-base-200 text-base-content max-w-xl">
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
                priority
                placeholder="blur"
                blurDataURL={UnderConstructionImg.blurDataURL}
                width={512}
                height={512}
                quality={70}
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
