import clsx from "clsx";
import { Button, Logo, AuthButton } from "components";
import Link from "next/link";
import Image from "next/image";
import { getServerSession } from "next-auth";

const UserInfo = ({ user }) => {
  const { username, image } = user;
  return (
    <>
      {image && (
        <Image
          src={image}
          width="40"
          height="40"
          alt={`${username}'s profile picture`}
          className="size-10 rounded-full"
        />
      )}
    </>
  );
};

export const Header = async ({}) => {
  const session = await getServerSession();

  return (
    <header
      className={clsx(
        "mb-[50px] flex w-full flex-row items-center justify-between border-b-[0.5px] border-[#edede3]/50 bg-[#443b4a] px-4 py-4 sm:mb-[100px]",
      )}
    >
      <Link href="/">
        <Logo size="large" />
      </Link>
      <nav className="max-sm:hidden"></nav>
      <div className="flex flex-row items-center justify-center gap-x-4">
        {session && <UserInfo user={session.user} />}
        {!session && <AuthButton className="max-lg:hidden" variant="signIn" />}
        {session && <AuthButton className="max-lg:hidden" variant="signOut" />}
        <Button
          content={{
            iconName: "Bars3",
          }}
          className="lg:hidden"
        />
      </div>
    </header>
  );
};
