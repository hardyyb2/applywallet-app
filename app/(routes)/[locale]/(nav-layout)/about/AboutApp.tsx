import Image from "next/image";
import Link from "next/link";

import { buttonVariants } from "~/components/ds/Button";
import { Card } from "~/components/ds/Card";
import { Typography } from "~/components/ds/Typography";
import { AppRoutes } from "~/utils/routes";

import AwLogoImg from "public/images/logo/aw-logo.png";

import { getI18n } from "@/locales/server";

const AboutApp = async () => {
  const t = await getI18n();

  return (
    <Card className="overflow-hidden">
      <Card.Body className="gap-xs items-center">
        <Card.Figure className="mt-xs h-32 w-32 lg:h-40 lg:w-40">
          <Image
            src={AwLogoImg}
            alt="applywallet"
            width={120}
            height={120}
            className="z-1 h-full w-full object-cover"
          />
        </Card.Figure>

        <Card.Title className="text-base-content z-1">
          <Typography variant="headline-s">applywallet</Typography>
        </Card.Title>
        <Typography
          variant="body-m"
          align="center"
          className="text-base-content z-1"
        >
          {t("about.app.subtitle")}
        </Typography>

        <Card.Actions className="z-1 grid w-full grid-cols-2">
          <Link
            href={AppRoutes.APP_STRUCTURE}
            className={buttonVariants({
              color: "secondary",
              variant: "outline",
            })}
          >
            app structure
          </Link>
          <Link
            href={AppRoutes.BLOGS}
            className={buttonVariants({
              color: "primary",
            })}
          >
            blogs
          </Link>
        </Card.Actions>
      </Card.Body>
    </Card>
  );
};

export { AboutApp };
