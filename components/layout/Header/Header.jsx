import clsx from "clsx";
import { Logo, AuthButton, Icon } from "components";
import Link from "next/link";
import Image from "next/image";
import { getServerSession } from "next-auth";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

const UserInfo = ({ user }) => {
  const { username, image } = user;
  return (
    <Menu>
      <MenuButton>
        <Image
          src={image}
          width="40"
          height="40"
          alt={`${username}'s profile picture`}
          className="size-10 rounded-full"
        />
      </MenuButton>
      <MenuItems
        anchor="bottom end"
        transition
        className="origin-top space-y-4 rounded-lg bg-[#7f698e] p-4 transition duration-200 ease-out [--anchor-gap:8px] data-[closed]:scale-y-90 data-[closed]:opacity-0"
      >
        <MenuItem>
          <p className="text-md flex flex-row gap-x-2 font-bold">
            <Icon name="UserCircle" size="medium" />
            {username || "Username unknown"}
          </p>
        </MenuItem>
        <MenuItem>
          <AuthButton variant="signOut" className="w-max flex-shrink-0" />
        </MenuItem>
      </MenuItems>
    </Menu>
  );
};

export const Header = async ({}) => {
  const session = await getServerSession();

  return (
    <header
      className={clsx(
        "mb-[50px] flex w-full flex-row items-center justify-between border-b-[0.5px] border-[#edede3]/50 bg-[#443b4a] p-4 sm:mb-[100px]",
      )}
    >
      <Link href="/">
        <Logo size="large" />
      </Link>
      <nav className="max-sm:hidden"></nav>
      <div className="flex flex-row items-center justify-center gap-x-4">
        {session && <UserInfo user={session.user} />}
        {!session && <AuthButton variant="signIn" />}
      </div>
    </header>
  );
};
