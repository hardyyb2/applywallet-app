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
      <Card.Body className="items-center gap-xs">
        <Card.Figure className="mt-xs h-32 w-32 lg:h-40 lg:w-40">
          <Image
            src={AwLogoImg}
            alt="applywallet"
            width={120}
            height={120}
            className="z-[1] h-full w-full object-cover"
          />
        </Card.Figure>

        <Card.Title className="z-[1] text-base-content">
          <Typography variant="headline-s">applywallet</Typography>
        </Card.Title>
        <Typography
          variant="body-m"
          align="center"
          className="z-[1] text-base-content"
        >
          {t("about.app.subtitle")}
        </Typography>

        <Card.Actions className="z-[1] w-full">
          <Link
            href={AppRoutes.BLOGS}
            className={buttonVariants({
              color: "primary",
              fullWidth: true,
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
