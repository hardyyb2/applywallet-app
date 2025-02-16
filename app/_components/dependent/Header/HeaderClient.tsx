"use client";

import { Button } from "~/components/ds/Button";
import { Icons } from "~/components/ds/Icons";

import { useSideNavMobileStore } from "@/store/useSideNavMobile";
import { cnM } from "@/utils/styles";

type HeaderClientProps = {
  className?: string;
};

const HeaderClient = ({ className }: HeaderClientProps) => {
  const { toggleSideNavMobileOpen } = useSideNavMobileStore();

  return (
    <Button
      color="ghost"
      responsive
      className={cnM("pr-8!", className)}
      onClick={toggleSideNavMobileOpen}
      startIcon={<Icons.AlignLeft className="h-7! w-7!" />}
    />
  );
};

export { HeaderClient };
