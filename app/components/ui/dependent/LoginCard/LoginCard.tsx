import { Typography } from "../../isolated/common";
import { Button, Card, Divider } from "../../isolated/wrapped";
import { LCLoginButton } from "./components/LCLoginButton";

const LoginCard = () => {
  return (
    <Card side="lg" className="max-w-lg bg-base-200 text-base-content">
      <Card.Body className="items-center">
        <Card.Title variant="h4" align="center">
          Welcome to applywallet!
        </Card.Title>
        <Typography variant="body1" align="center">
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
          <Button color="secondary" variant="outline" fullWidth>
            Blogs
          </Button>
        </Card.Actions>
      </Card.Body>
    </Card>
  );
};

export { LoginCard };
