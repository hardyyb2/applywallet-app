import Image from "next/image";

import { Card } from "~/components/ds/Card";

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

        <h3 className="headline-s mt-xs">hardik badola</h3>
      </Card.Body>
    </Card>
  );
};

export { AboutCreator };
