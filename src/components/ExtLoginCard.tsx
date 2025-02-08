import { Button } from "~/components/ds/Button";
import { Card } from "~/components/ds/Card";
import { Separator } from "~/components/ds/Separator";
import { Typography } from "~/components/ds/Typography";

const ExtLoginCard = () => {
  const handleLoginClick = () => {
    // TODO - change this to URL
    window.open("http://localhost:3000");
  };

  const handleBlogsClick = () => {
    window.open("http://localhost:3000/blogs");
  };

  return (
    <Card
      side="lg"
      className="max-w-xl rounded-none bg-base-200 text-base-content"
    >
      <Card.Body className="items-center">
        <Typography
          variant="headline-m"
          lg="headline-l"
          align="center"
          className="first-letter:capitalize"
        >
          Welcome to applywallet!
        </Typography>

        <Typography variant="body-s" lg="body-m" align="center">
          sign in to access your interview toolkit
        </Typography>

        <Card.Actions className="mt-4 w-full justify-center">
          <Button color="primary" fullWidth onClick={handleLoginClick}>
            login
          </Button>
        </Card.Actions>

        <Separator className="!my-s">or</Separator>

        <Typography variant="body-m" lg="body-l" align="center">
          not ready to log in yet? no worries! you can still browse our public
          pages
        </Typography>

        <Card.Actions className="mt-4 w-full justify-center">
          <Button
            variant="outline"
            color="secondary"
            fullWidth
            onClick={handleBlogsClick}
          >
            blogs
          </Button>
        </Card.Actions>
      </Card.Body>
    </Card>
  );
};

export { ExtLoginCard };
