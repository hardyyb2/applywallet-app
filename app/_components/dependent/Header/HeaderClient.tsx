"use client";

import { useRouter, useSearchParams } from "next/navigation";

import { Button } from "~/components/ds/Button";
import { Icons } from "~/components/ds/Icons";
import { SearchParams } from "~/utils/routes";

import { cnM } from "@/utils/styles";

type HeaderClientProps = {
  className?: string;
};

const HeaderClient = ({ className }: HeaderClientProps) => {
  const router = useRouter();
  const searchParams = new URLSearchParams(useSearchParams());

  const handleMenuToggle = () => {
    const menuOpen = searchParams.get(SearchParams.MOBILE_SIDE_MENU_OPEN);
    if (menuOpen) {
      searchParams.delete(SearchParams.MOBILE_SIDE_MENU_OPEN);
    } else {
      searchParams.set(SearchParams.MOBILE_SIDE_MENU_OPEN, "true");
    }

    router.push(`?${searchParams}`);
  };

  return (
    <Button
      color="ghost"
      className={cnM(className)}
      onClick={handleMenuToggle}
      startIcon={<Icons.AlignLeft className="!h-7 !w-7" />}
    />
  );
};

export { HeaderClient };
