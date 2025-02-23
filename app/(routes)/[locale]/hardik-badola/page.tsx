import { BaseLayout } from "@/components/dependent/BaseLayout";
import { cn } from "@/utils/styles";

import { HBHome } from "./home/HBHome";
import { HBNavbar } from "./nav/HBNavbar";

const HardikBadola = () => {
  return (
    <BaseLayout className="from-base-100 to-base-200 bg-linear-to-br">
      <BaseLayout.Body>
        <div className="hidden">Side nav</div>
        <div className="grid w-full grid-rows-[auto_1fr] overflow-auto">
          <BaseLayout.Head className={cn("text-base-content z-5 w-full")}>
            <HBNavbar />
          </BaseLayout.Head>
          <section className="w-full snap-y snap-mandatory overflow-auto">
            <HBHome className="min-h-[calc(100vh-4rem)] snap-start" />
          </section>
        </div>
      </BaseLayout.Body>
    </BaseLayout>
  );
};

export default HardikBadola;
