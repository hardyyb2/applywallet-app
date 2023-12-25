import Link from "next/link";

import { buttonVariants } from "~/components/ds/Button";
import { Card } from "~/components/ds/Card";
import { Divider } from "~/components/ds/Divider";
import { Separator } from "~/components/ds/Separator";
import { AppRoutes } from "~/utils/routes";

import { getI18n } from "@/locales/server";

import { LCLoginButton } from "./LCLoginButton";

const LoginCard = async () => {
  const t = await getI18n();

  return (
    <Card side="lg" className="max-w-xl bg-base-200 text-base-content">
      <Card.Body className="items-center">
        <Card.Title className="headline-m inline-block text-center lg:headline-l first-letter:capitalize">
          {t("loginCard.title")}
        </Card.Title>
        <p className="body-s text-center lg:body-m">
          {t("loginCard.subtitle")}
        </p>

        <Card.Actions className="mt-4 w-full justify-center">
          <LCLoginButton />
        </Card.Actions>
        <Separator className="!my-s">{t("common.or")}</Separator>
        <p className="body-m text-center lg:body-l">
          {t("loginCard.alt_subtitle")}
        </p>

        <Card.Actions className="mt-4 w-full justify-center">
          <Link
            className={buttonVariants({
              variant: "outline",
              color: "secondary",
              className: "w-full",
            })}
            href={AppRoutes.BLOGS}
          >
            {t("routes.blogs")}
          </Link>
        </Card.Actions>
      </Card.Body>
    </Card>
  );
};

export { LoginCard };
