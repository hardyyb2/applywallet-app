import Link from "next/link";

import { AppRoutes } from "@/_utils/routes.utils";

import { Typography } from "../../isolated/common";
import { Button, buttonVariants, Card, Divider } from "../../isolated/wrapped";
import { LCLoginButton } from "./components/LCLoginButton";

const LoginCard = () => {
  return (
    <Card side="lg" className="max-w-xl bg-base-200 text-base-content">
      <Card.Body className="items-center">
        <Card.Title variant="h3" align="center">
          Welcome to applywallet!
        </Card.Title>
        <Typography variant="body2" align="center">
          sign in to access your interview toolkit
        </Typography>

        <Card.Actions className="mt-4 w-full justify-center">
          <LCLoginButton />
        </Card.Actions>
        <Divider>or</Divider>
        <Typography variant="subtitle2" align="center">
          not ready to log in yet? no worries! you can still browse our public
          pages
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
            Blogs
          </Link>
        </Card.Actions>
      </Card.Body>
    </Card>
  );
};

export { LoginCard };
