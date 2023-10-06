"use client";

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";

import { Flex } from "@/components/ui/isolated/common";
import {
  Avatar,
  AvatarFallback,
  Button,
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/isolated/wrapped";
import { getInitials } from "@/utils/string.utils";
import { cn } from "@/utils/styles.utils";

const UserMenu = () => {
  const { data: session } = useSession();

  const user = session?.user ?? null;
  const userImage = user?.image ?? undefined;
  const userName = user?.name ?? "user";

  const handleLogout = () => {
    signOut();
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Avatar>
          {userImage ? (
            <Flex
              justify="center"
              align="center"
              className="!flex w-10 rounded-xl bg-base-200 ring ring-base-200 ring-offset-2"
            >
              <Image
                className="btn-ghost btn border-none object-contain p-0"
                src={userImage}
                width={80}
                height={80}
                alt={userName}
                referrerPolicy="no-referrer"
              />
            </Flex>
          ) : (
            <AvatarFallback delayMs={600}>
              <Button
                color="ghost"
                className="mask mask-squircle w-12 bg-base-100 p-0"
              >
                {getInitials(userName).toLowerCase()}
              </Button>
            </AvatarFallback>
          )}
        </Avatar>
      </PopoverTrigger>
      <PopoverContent collisionPadding={8}>
        <ul role="listbox" className="menu gap-2 rounded-xl bg-base-100 p-2">
          <li
            className={cn("rounded-lg outline-offset-2 [&_a]:w-max [&_a]:p-0")}
            role="listitem"
          >
            <Button
              onClick={handleLogout}
              color="ghost"
              className="flex flex-row flex-nowrap"
            >
              <span>logout</span>
            </Button>
          </li>
        </ul>
        <PopoverArrow className="fill-primary" />
      </PopoverContent>
    </Popover>
  );
};

export { UserMenu };
