import Link from "next/link";

import { buttonVariants } from "~/components/ds/Button";
import { Card } from "~/components/ds/Card";
import { Separator } from "~/components/ds/Separator";
import { AppRoutes } from "~/utils/routes";

import { getI18n } from "@/locales/server";

import { LCLoginButton } from "./LCLoginButton";

const LoginCard = async () => {
  const t = await getI18n();

  return (
    <Card side="lg" className="bg-base-200 text-base-content max-w-xl">
      <Card.Body className="items-center">
        <Card.Title className="headline-m lg:headline-l inline-block text-center first-letter:capitalize">
          {t("loginCard.title")}
        </Card.Title>
        <p className="body-s lg:body-m text-center">
          {t("loginCard.subtitle")}
        </p>

        <Card.Actions className="mt-4 w-full justify-center">
          <LCLoginButton />
        </Card.Actions>
        <Separator className="my-s!">{t("common.or")}</Separator>
        <p className="body-m lg:body-l text-center">
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
