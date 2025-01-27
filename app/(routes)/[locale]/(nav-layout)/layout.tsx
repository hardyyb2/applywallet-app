import { type ReactNode } from "react";

import { BaseLayout } from "@/components/dependent/BaseLayout";
import { Header } from "@/components/dependent/Header";
import { Navigation } from "@/components/dependent/Navigation";
import { cn } from "@/utils/styles";

const NavLayout = ({ children }: { children: ReactNode }) => {
  return (
    <BaseLayout className="bg-gradient-to-br from-primary/20 to-secondary/20">
      <BaseLayout.Body
        className={cn(
          "overflow-hidden lg:grid lg:grid-cols-[max-content_auto]",
        )}
      >
        <Navigation />
        <div className="h-full w-full overflow-y-auto">
          <BaseLayout.Head
            className={cn("z-[5] h-14 w-full text-base-content lg:h-16")}
          >
            <Header />
          </BaseLayout.Head>
          <section
            className="h-full w-full overflow-y-auto"
            vaul-drawer-wrapper=""
          >
            {children}
          </section>
        </div>
      </BaseLayout.Body>
    </BaseLayout>
  );
};

export default NavLayout;
