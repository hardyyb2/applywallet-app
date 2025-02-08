import Image from "next/image";

import { Card } from "~/components/ds/Card";
import { Typography } from "~/components/ds/Typography";

const AboutCreator = () => {
  return (
    <Card>
      <Card.Body className="items-center">
        <Card.Figure className="h-52 w-52 self-center overflow-hidden rounded-full lg:h-80 lg:w-80">
          <Image
            src="/images/blogs/scalable-react/scalable-react.jpg"
            alt="creator"
            width={320}
            height={320}
            className="h-full w-full object-cover"
          />
        </Card.Figure>

        <Typography variant="headline-s" className="mt-xs">
          hardik badola
        </Typography>
      </Card.Body>
    </Card>
  );
};

export { AboutCreator };
