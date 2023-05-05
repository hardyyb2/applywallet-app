"use client";

import clsx from "clsx";
import { useSession, signOut } from "next-auth/react";
import React from "react";

import { Avatar, Button, Popover } from "@/components/ui/isolated/wrapped";

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
        <Avatar.Root className="avatar ">
          {userImage ? (
            <div className="w-12 / mask mask-squircle">
              <Avatar.Image
                className="btn btn-ghost / p-0 / border-none"
                src={userImage}
                alt={userName}
              />
            </div>
          ) : null}

          <Avatar.Fallback delayMs={600}>
            <Button
              color="ghost"
              className="mask mask-squircle / w-12 p-0 / bg-base-100"
            >
              CT
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
