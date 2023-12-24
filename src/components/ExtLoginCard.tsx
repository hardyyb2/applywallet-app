import { Button } from "~/components/isolated/Button";
import { Card } from "~/components/isolated/Card";
import { Divider } from "~/components/isolated/Divider";

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
        <Card.Title className="headline-m inline-block text-center lg:headline-l first-letter:capitalize">
          Welcome to applywallet!
        </Card.Title>
        <p className="body-s text-center lg:body-m">
          sign in to access your interview toolkit
        </p>
        <Card.Actions className="mt-4 w-full justify-center">
          <Button color="primary" fullWidth onClick={handleLoginClick}>
            login
          </Button>
        </Card.Actions>
        <Divider>or</Divider>
        <p className="body-m text-center lg:body-l">
          not ready to log in yet? no worries! you can still browse our public
          pages
        </p>
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
