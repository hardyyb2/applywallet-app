import React from "react";

import { BaseLayout, Navigation } from "@/components/ui/dependent/common";
import { Header } from "@/components/ui/dependent/common/Header";
import { cn } from "@/utils/styles.utils";

const NavLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <BaseLayout className="h-full">
      <BaseLayout.Head
        className={cn(
          "fixed top-0 z-[5] h-16 w-full text-base-content lg:h-[--header-height] ",
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
        {/* Padding top same as height of the header */}
        <section className="h-full w-full  overflow-y-auto py-[--header-height]">
          {children}
        </section>
      </BaseLayout.Body>
    </BaseLayout>
  );
};

export default NavLayout;
