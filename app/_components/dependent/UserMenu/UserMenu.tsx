"use client";

import { signOut, useSession } from "next-auth/react";

import { Avatar, AvatarFallback, AvatarImage } from "~/components/ds/Avatar";
import { Button } from "~/components/ds/Button";
import { Icons } from "~/components/ds/Icons";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ds/Popover";

import { getInitials } from "@/utils/string";
import { cn } from "@/utils/styles";

import { LoginButton } from "../Header/LoginButton";

const UserMenu = () => {
  const { data: session } = useSession();

  const user = session?.user ?? null;
  const [userImage, userName] = [
    user?.image ?? undefined,
    user?.name ?? "user",
  ];

  const handleLogout = () => {
    signOut();
  };

  if (!user) {
    return <LoginButton />;
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Avatar className="cursor-pointer">
          <AvatarImage
            src={userImage}
            alt={userName}
            referrerPolicy="no-referrer"
          />
          <AvatarFallback delayMs={600}>
            <Button
              color="ghost"
              className="mask mask-squircle w-12 bg-base-100 p-0"
            >
              {getInitials(userName).toLowerCase()}
            </Button>
          </AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent align="end" sideOffset={8} alignOffset={-4}>
        <ul role="listbox" className="menu gap-2 p-0">
          <li
            className={cn("rounded-lg outline-offset-2 [&_a]:w-max [&_a]:p-0")}
            role="listitem"
          >
            <Button
              onClick={handleLogout}
              color="ghost"
              className="flex flex-row flex-nowrap"
              startIcon={<Icons.LogOut />}
            >
              <span>logout</span>
            </Button>
          </li>
        </ul>
      </PopoverContent>
    </Popover>
  );
};

export { UserMenu };
