import Image from "next/image";

import { Flex } from "~/components/ds/Flex";
import { Typography } from "~/components/ds/Typography";

import { shimmer } from "@/utils/shimmer";
import { toBase64 } from "@/utils/string";
import { cnM } from "@/utils/styles";

import styles from "./hbHome.module.css";

const stripesList1: { label: string; logo: string }[] = [
  { label: "React", logo: "/images/technologies/react.svg" },
  { label: "Next.js", logo: "/images/technologies/nextjs.svg" },
  { label: "Tailwind CSS", logo: "/images/technologies/tailwindcss.svg" },
  { label: "TypeScript", logo: "/images/technologies/typescript.svg" },
  { label: "Node.js", logo: "/images/technologies/node.svg" },
  { label: "Express", logo: "/images/technologies/express.svg" },
  { label: "MongoDB", logo: "/images/technologies/mongodb.svg" },
  { label: "HTML", logo: "/images/technologies/html.svg" },
  { label: "CSS", logo: "/images/technologies/css.svg" },
  { label: "JavaScript", logo: "/images/technologies/javascript.svg" },
];

const StripeItem = ({ label, logo }: { label: string; logo: string }) => {
  return (
    <Flex className="gap-xs-s" align="center">
      <figure className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12">
        <Image
          src={logo}
          alt={label}
          width={48}
          height={48}
          className="rounded-box h-full w-full object-contain lowercase"
          placeholder={`data:image/svg+xml;base64,${toBase64(
            shimmer(120, 120),
          )}`}
        />
      </figure>
      <Typography
        variant="label-l"
        lg="headline-l"
        className="text-nowrap"
        key={`label-${label}`}
      >
        {label}
      </Typography>
    </Flex>
  );
};

const Stripes = ({ direction = "left" }: { direction?: "left" | "right" }) => {
  return (
    <Flex className="gap-l-xl bg-base-100 py-xs-s border-base-content w-full border-y-2">
      <Flex
        className={cnM(
          "gap-l-xl",
          direction === "right" && styles.stripesAnimation,
          direction === "left" && styles.stripesAnimationReverse,
        )}
      >
        {stripesList1.map((stripe) => (
          <StripeItem {...stripe} key={`stripe-1-${stripe.label}`} />
        ))}
      </Flex>
      <Flex
        className={cnM(
          "gap-l-xl",
          direction === "right" && styles.stripesAnimation,
          direction === "left" && styles.stripesAnimationReverse,
        )}
        aria-hidden="true"
      >
        {stripesList1.map((stripe) => (
          <StripeItem {...stripe} key={`stripe-2-${stripe.label}`} />
        ))}
      </Flex>
    </Flex>
  );
};

const HBHomeStripes = () => {
  return (
    <Flex className="absolute bottom-0 w-full -rotate-1" direction="column">
      <Stripes direction="right" />
      <Stripes direction="left" />
    </Flex>
  );
};

export { HBHomeStripes };
