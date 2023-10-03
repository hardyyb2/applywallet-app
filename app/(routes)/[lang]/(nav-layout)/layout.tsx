import { ReactNode } from "react";

import { cn } from "@/_utils/styles.utils";

import { BaseLayout, Header, Navigation } from "@/components/ui/dependent";

const NavLayout = ({ children }: { children: ReactNode }) => {
  return (
    <BaseLayout className="h-full">
      <BaseLayout.Head
        className={cn(
          "fixed left-0 top-0 z-[5] h-16 w-full text-base-content lg:h-[--header-height] ",
          "bg-opacity-60 backdrop-blur",
        )}
      >
        {/* @ts-expect-error Server Component */}
        <Header />
      </BaseLayout.Head>
      <BaseLayout.Body
        className={cn(
          "flex lg:grid lg:grid-cols-[max-content_auto]",
          "overflow-hidden bg-gradient-to-br from-primary/40 to-secondary/40",
        )}
      >
        <Navigation />
        {/* TODO - change this header height logic */}
        {/* padding top - padding bottom same as height of the header, hide padding bottom on large screens when bottom nav is not visible */}
        <section className="h-full w-full overflow-y-auto pb-[--header-height] pt-16 lg:pb-0 lg:pt-[--header-height]">
          {children}
        </section>
      </BaseLayout.Body>
    </BaseLayout>
  );
};

export default NavLayout;
