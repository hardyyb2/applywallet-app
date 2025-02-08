import { BasePageHeader } from "@/components/dependent/BasePageHeader";

import { AboutCreator } from "./AboutCreator";

const AboutPage = () => {
  return (
    <div className="h-full px-5 py-4 lg:px-10">
      <BasePageHeader title="about" subtitle="" />

      <div className="grid grid-cols-1 gap-xs-s lg:grid-cols-2">
        <div>About App</div>
        <AboutCreator />
      </div>
    </div>
  );
};

export default AboutPage;
