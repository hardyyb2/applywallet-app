import Link from "next/link";

import { getI18n } from "@/locales/server";
import { AppRoutes } from "@/utils/routes.utils";

import { Typography } from "../../isolated/common";
import { buttonVariants, Card, Divider } from "../../isolated/wrapped";
import { LCLoginButton } from "./components/LCLoginButton";

const LoginCard = async () => {
  const t = await getI18n();

  return (
    <Card side="lg" className="max-w-xl bg-base-200 text-base-content">
      <Card.Body className="items-center">
        <Card.Title
          variant="h3"
          align="center"
          className="inline-block first-letter:capitalize"
        >
          {t("loginCard.title")}
        </Card.Title>
        <Typography variant="body2" align="center">
          {t("loginCard.subtitle")}
        </Typography>

        <Card.Actions className="mt-4 w-full justify-center">
          <LCLoginButton />
        </Card.Actions>
        <Divider>{t("common.or")}</Divider>
        <Typography variant="subtitle2" align="center">
          {t("loginCard.alt_subtitle")}
        </Typography>
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
