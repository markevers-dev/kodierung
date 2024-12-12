import clsx from "clsx";
import { Button, Logo, AuthButton } from "components";
import Link from "next/link";
import { getServerSession } from "next-auth";

export const Header = async ({}) => {
  const session = await getServerSession();
  const name = session?.user?.name;

  return (
    <header
      className={clsx(
        "container mb-[50px] flex w-full flex-row items-center justify-between border-b-[0.5px] border-[#edede3]/50 px-6 py-4 sm:mb-[100px] sm:px-20 sm:py-6",
      )}
    >
      <Link href="/">
        <Logo size="large" />
      </Link>
      <nav className="max-sm:hidden"></nav>
      <div className="flex flex-row items-center justify-center gap-x-4">
        {name && (
          <p className="text-md font-bold max-sm:hidden sm:text-lg">{name}</p>
        )}
        <AuthButton className="max-lg:hidden" />
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
