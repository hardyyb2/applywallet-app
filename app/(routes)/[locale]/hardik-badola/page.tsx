import { BaseLayout } from "@/components/dependent/BaseLayout";
import { cn } from "@/utils/styles";

import { HBHome } from "./home/HBHome";
import { HBNavbar } from "./nav/HBNavbar";

const HardikBadola = () => {
  return (
    <BaseLayout className="from-base-100 to-base-200 bg-linear-to-br">
      <BaseLayout.Body className={cn("overflow-hidden")}>
        <div className="hidden">Side nav</div>
        <div className="grid w-full grid-rows-[auto_1fr] overflow-auto">
          <BaseLayout.Head
            className={cn("text-base-content z-5 h-12 w-full lg:h-16")}
          >
            <HBNavbar />
          </BaseLayout.Head>
          <section
            className="h-full w-full overflow-auto"
            vaul-drawer-wrapper=""
          >
            <HBHome />
          </section>
        </div>
      </BaseLayout.Body>
    </BaseLayout>
  );
};

export default HardikBadola;
