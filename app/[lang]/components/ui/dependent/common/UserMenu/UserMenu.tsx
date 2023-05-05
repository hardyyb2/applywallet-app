"use client";

import clsx from "clsx";
import { useSession, signOut } from "next-auth/react";
import React from "react";

import { Flex } from "@/components/ui/isolated/common";
import { Avatar, Button, Popover } from "@/components/ui/isolated/wrapped";
import { getInitials } from "@/utils/string.utils";

const UserMenu = () => {
  const { data: session } = useSession();

  const user = session?.user ?? null;
  const userImage = user?.image ?? undefined;
  const userName = user?.name ?? "user";

  const handleLogout = () => {
    signOut();
  };

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <Avatar.Root className="avatar">
          {userImage ? (
            <Flex
              justify="center"
              align="center"
              className="w-10 / rounded-xl / bg-base-200 / ring ring-base-200 ring-offset-2"
            >
              <Avatar.Image
                className="btn btn-ghost / p-0 / border-none "
                src={userImage}
                alt={userName}
              />
            </Flex>
          ) : null}

          <Avatar.Fallback delayMs={600}>
            <Button
              color="ghost"
              className="mask mask-squircle / w-12 p-0 / bg-base-100"
            >
              {getInitials(userName).toLowerCase()}
            </Button>
          </Avatar.Fallback>
        </Avatar.Root>
      </Popover.Trigger>
      <Popover.Content collisionPadding={8}>
        <ul
          role="listbox"
          className="menu / gap-2 p-2 / bg-base-100 / rounded-xl"
        >
          <li
            className={clsx(
              "rounded-lg outline-offset-2 / [&_a]:w-max [&_a]:p-0",
            )}
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
        <Popover.Arrow className="fill-primary" />
      </Popover.Content>
    </Popover.Root>
  );
};

export { UserMenu };
