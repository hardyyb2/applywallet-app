import { BasePageHeader } from "@/components/dependent/BasePageHeader";

import { AboutApp } from "./AboutApp";
import { AboutCreator } from "./AboutCreator";

const AboutPage = () => {
  return (
    <div className="h-full px-5 py-4 lg:px-10">
      <BasePageHeader title="about" subtitle="app & creator" />

      <div className="grid grid-cols-1 gap-xs-s lg:grid-cols-2">
        <AboutApp />

        <AboutCreator />
      </div>
    </div>
  );
};

export default AboutPage;
