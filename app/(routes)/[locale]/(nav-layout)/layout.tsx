import { type ReactNode } from "react";

import { BaseLayout } from "@/components/dependent/BaseLayout";
import { Header } from "@/components/dependent/Header";
import { Navigation } from "@/components/dependent/Navigation";
import { cn } from "@/utils/styles";

const NavLayout = ({ children }: { children: ReactNode }) => {
  return (
    <BaseLayout className="bg-gradient-to-br from-primary/40 to-secondary/40">
      <BaseLayout.Head
        className={cn("z-[5] h-14 w-full text-base-content lg:h-16")}
      >
        <Header />
      </BaseLayout.Head>
      <BaseLayout.Body
        className={cn(
          "lg:grid lg:grid-cols-[max-content_auto]",
          "overflow-hidden ",
        )}
      >
        <Navigation />
        <section
          className="h-full w-full overflow-y-auto"
          vaul-drawer-wrapper=""
        >
          {children}
        </section>
      </BaseLayout.Body>
    </BaseLayout>
  );
};

export default NavLayout;
