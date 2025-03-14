import { type ReactNode } from "react";

import { BaseLayout } from "@/components/dependent/BaseLayout";
import { Header } from "@/components/dependent/Header";
import { Navigation } from "@/components/dependent/Navigation";
import { cn } from "@/utils/styles";

const NavLayout = ({ children }: { children: ReactNode }) => {
  return (
    <BaseLayout className="from-primary/20 to-secondary/20 bg-linear-to-br">
      <BaseLayout.Body
        className={cn(
          "overflow-hidden lg:grid lg:grid-cols-[max-content_auto]",
        )}
      >
        <Navigation />
        <div className="grid w-full grid-rows-[auto_1fr] overflow-auto">
          <BaseLayout.Head
            className={cn("text-base-content z-5 h-12 w-full lg:h-16")}
          >
            <Header />
          </BaseLayout.Head>
          <section
            className="h-full w-full overflow-auto"
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
