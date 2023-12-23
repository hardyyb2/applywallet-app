import { Button } from "@/components/isolated/Button";
import { Card } from "@/components/isolated/Card";
import { Divider } from "@/components/isolated/Divider";
import { Typography } from "@/components/isolated/Typography";

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
        <Card.Title
          variant="display-m"
          align="center"
          className="inline-block first-letter:capitalize"
        >
          Welcome to applywallet!
        </Card.Title>
        <Typography variant="body-m" align="center">
          sign in to access your interview toolkit
        </Typography>

        <Card.Actions className="mt-4 w-full justify-center">
          <Button color="primary" fullWidth onClick={handleLoginClick}>
            login
          </Button>
        </Card.Actions>
        <Divider>or</Divider>
        <Typography variant="body-l" align="center">
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
